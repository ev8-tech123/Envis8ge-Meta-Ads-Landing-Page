// Redirect Worker for https://metaads.envis8ge.com (Worker wispy-brook-7a3f, attached as a Custom Domain).
// Replaces the old static landing page: every path on the old host goes to the new landing page URL,
// keeping the full query string (fbclid, utm_* ...) because the lead form reads UTM parameters from the page URL.

const TARGET = "https://envis8ge.com/leadgenads";

// 302 while the migration is being validated (browsers cache 301s hard, which would make a rollback sticky).
// Switch to 301 once /leadgenads has been stable for a while.
const REDIRECT_STATUS = 302;

export default {
  async fetch(request) {
    const { search } = new URL(request.url);
    return new Response(null, {
      status: REDIRECT_STATUS,
      headers: { Location: TARGET + search, "Cache-Control": "no-store" },
    });
  },
};
