export default function handler(request, response) {
  const normalizeSupabaseUrl = (value) => {
    const url = (value || "").trim();
    if (!url) return "";
    return /^https?:\/\//i.test(url) ? url : `https://${url}`;
  };

  const normalizeAnonKey = (value) => {
    const key = (value || "").trim();
    if (!key || key === "SUPABASE_ANON_KEY" || key === "SUPABASE_PUBLISHABLE_KEY") {
      return "";
    }
    return key;
  };

  const config = {
    url: normalizeSupabaseUrl(process.env.SUPABASE_URL),
    anonKey: normalizeAnonKey(process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_PUBLISHABLE_KEY)
  };

  response.setHeader("Content-Type", "application/javascript; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.status(200).send(`window.__SUPABASE_CONFIG__ = ${JSON.stringify(config)};`);
}
