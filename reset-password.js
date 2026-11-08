import {
    isSupabaseConfigured,
    supabase,
    supabaseConfigurationMessage
} from "./supabaseClient.js";

const requestForm = document.querySelector("#requestResetForm");
const newPasswordForm = document.querySelector("#newPasswordForm");
const resetStatus = document.querySelector("#resetStatus");

function showPasswordForm() {
    requestForm.hidden = true;
    newPasswordForm.hidden = false;
    resetStatus.textContent = "Choose a new password for your account.";
}

if (!isSupabaseConfigured) {
    resetStatus.textContent = supabaseConfigurationMessage;
} else {
    supabase.auth.onAuthStateChange((event, session) => {
        if (event === "PASSWORD_RECOVERY" && session) showPasswordForm();
    });
}

requestForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!isSupabaseConfigured) return;

    const submitButton = requestForm.querySelector('[type="submit"]');
    submitButton.disabled = true;
    resetStatus.textContent = "Sending reset link...";

    try {
        const { error } = await supabase.auth.resetPasswordForEmail(
            requestForm.elements.email.value.trim(),
            { redirectTo: new URL("./reset-password.html", window.location.href).href }
        );
        if (error) throw error;
        resetStatus.textContent = "If an account exists for that email, a reset link has been sent.";
    } catch {
        resetStatus.textContent = "We could not send a reset link. Please try again later.";
    } finally {
        submitButton.disabled = false;
    }
});

newPasswordForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!isSupabaseConfigured) return;

    const password = newPasswordForm.elements.password.value;
    if (password !== newPasswordForm.elements.confirmPassword.value) {
        resetStatus.textContent = "The passwords do not match.";
        newPasswordForm.elements.confirmPassword.focus();
        return;
    }

    const submitButton = newPasswordForm.querySelector('[type="submit"]');
    submitButton.disabled = true;
    resetStatus.textContent = "Updating your password...";

    try {
        const { error } = await supabase.auth.updateUser({ password });
        if (error) throw error;
        await supabase.auth.signOut();
        window.location.assign("./index.html#loginId");
    } catch {
        resetStatus.textContent = "Password update failed. Request a new reset link and try again.";
        submitButton.disabled = false;
    }
});