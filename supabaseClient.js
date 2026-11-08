import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://YOUR_PROJECT_ID.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "YOUR_SUPABASE_PUBLISHABLE_KEY";

export const isSupabaseConfigured =
    !SUPABASE_URL.includes("YOUR_") &&
    !SUPABASE_PUBLISHABLE_KEY.includes("YOUR_");

export const supabase = isSupabaseConfigured
    ? createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
    : null;