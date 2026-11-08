import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "";
const SUPABASE_PUBLISHABLE_KEY = "";

function isValidProjectUrl(value) {
    try {
        const url = new URL(value);
        return url.protocol === "https:" ||
            (url.protocol === "http:" && ["localhost", "127.0.0.1"].includes(url.hostname));
    } catch {
        return false;
    }
}

export const isSupabaseConfigured =
    isValidProjectUrl(SUPABASE_URL) &&
    SUPABASE_PUBLISHABLE_KEY.trim().length > 20;

export const supabaseConfigurationMessage =
    "Set your Supabase project URL and publishable (or legacy anon) key in supabaseClient.js. Use the public client key, never a service_role or secret key.";

export const supabase = isSupabaseConfigured
    ? createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
    : null;