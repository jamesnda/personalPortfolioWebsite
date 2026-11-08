import { isSupabaseConfigured, supabase } from "./supabaseClient.js";

const signupForm = document.querySelector("#signupForm");
const signupStatus = document.querySelector("#signupStatus");

signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!isSupabaseConfigured) {
        signupStatus.textContent = "Account creation is not configured yet. Please try again later.";
        return;
    }

    const form = event.currentTarget;
    const password = form.elements.password.value;

    if (password !== form.elements.confirmPassword.value) {
        signupStatus.textContent = "The passwords do not match.";
        form.elements.confirmPassword.focus();
        return;
    }

    const submitButton = form.querySelector('[type="submit"]');
    submitButton.disabled = true;
    signupStatus.textContent = "Creating your account...";

    try {
        const { data, error } = await supabase.auth.signUp({
            email: form.elements.email.value.trim(),
            password,
            options: {
                data: {
                    full_name: form.elements.fullName.value.trim(),
                    phone: form.elements.phone.value.trim(),
                    audience: form.elements.audience.value
                },
                emailRedirectTo: new URL("./index.html#loginId", window.location.href).href
            }
        });

        if (error) throw error;

        if (data.session) {
            window.location.assign("./dashboard.html");
        } else {
            signupStatus.textContent = "Account created. Confirm your email, then sign in to continue.";
        }
    } catch (error) {
        signupStatus.textContent = error.message || "Account creation failed. Please try again.";
    } finally {
        submitButton.disabled = false;
    }
});