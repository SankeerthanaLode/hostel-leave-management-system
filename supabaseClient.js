var db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    realtime: { enabled: false }
});