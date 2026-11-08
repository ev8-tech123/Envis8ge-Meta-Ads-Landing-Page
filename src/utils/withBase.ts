// Prefixes a root-relative public/ path with the site base (e.g. "/video/x.mp4" -> "/leadgenads/video/x.mp4"),
// so the page works whether it is served from "/" or from a sub-path.
export function withBase(path: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;
}

// Absolute public URL of the landing page (site + base), e.g. "https://envis8ge.com/leadgenads".
export const landingPageUrl = new URL(import.meta.env.BASE_URL.replace(/\/$/, ""), import.meta.env.SITE).href;
