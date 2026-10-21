// Prefixes a root-relative public/ path with the site base (e.g. "/video/x.mp4" -> "/leadgen/video/x.mp4"),
// so the page works whether it is served from "/" or from a sub-path.
export function withBase(path: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;
}
