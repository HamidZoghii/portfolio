// Single source of truth for the GitHub Pages base path, shared by
// next.config.ts (which sets the framework-level basePath) and any
// component that needs to build a raw asset URL by hand — next/image
// does not automatically prefix `src` with basePath when
// `images.unoptimized` is on (required for static export), so image
// paths need this helper applied explicitly.
export const isGhPages = process.env.GITHUB_PAGES === "true";
export const basePath = isGhPages ? "/portfolio" : "";

export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
