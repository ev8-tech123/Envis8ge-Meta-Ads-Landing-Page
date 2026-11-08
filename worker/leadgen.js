// Worker script for envis8ge-leadgen (see wrangler.jsonc).
// Static assets are matched first, so /leadgenads and its files are served straight from dist/leadgenads/
// and this script only runs for requests that match no asset.
// It redirects the old landing page path to the new one, keeping the full query string
// (fbclid, utm_* ...) because the lead form reads UTM parameters from the page URL.

const OLD_BASE = "/leadgen";
const NEW_BASE = "/leadgenads";

// 302 while the migration is being validated (browsers cache 301s hard, which would make a rollback sticky).
// Switch to 301 once /leadgenads has been stable for a while.
const REDIRECT_STATUS = 302;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;

    if (pathname === OLD_BASE || pathname.startsWith(`${OLD_BASE}/`)) {
      // "/leadgen" and "/leadgen/" -> "/leadgenads"; "/leadgen/x" -> "/leadgenads/x". Host and query are kept.
      const rest = pathname.slice(OLD_BASE.length);
      url.pathname = rest === "/" ? NEW_BASE : NEW_BASE + rest;
      return new Response(null, {
        status: REDIRECT_STATUS,
        headers: { Location: url.toString(), "Cache-Control": "no-store" },
      });
    }

    // Anything else (e.g. a missing /leadgenads/* file): let the assets layer answer, as before this script existed.
    return env.ASSETS.fetch(request);
  },
};
