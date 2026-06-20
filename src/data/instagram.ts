export interface IGPost {
  /** Full public Instagram permalink — a post (/p/...) or reel (/reel/...). */
  url: string;
  /** Optional short label shown above the embed. */
  caption?: string;
}

// Paste your PUBLIC Instagram project links here and they render as playable
// embeds on /media. Order here = order on the page. Example:
//   { url: "https://www.instagram.com/reel/Cxxxxxxxxx/", caption: "launch film" },
export const instagramPosts: IGPost[] = [];
