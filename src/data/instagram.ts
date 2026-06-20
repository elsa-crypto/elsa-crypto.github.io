export interface IGPost {
  /** Full public Instagram permalink — a post (/p/...) or reel (/reel/...). */
  url: string;
  /** Optional short label shown above the embed. */
  caption?: string;
}

// PUBLIC Instagram project links — they render as playable embed cards on
// /media, in this order. Add a `caption` to label any of them.
export const instagramPosts: IGPost[] = [
  { url: "https://www.instagram.com/reel/DMdgJ25ym-y/" },
  { url: "https://www.instagram.com/reel/DQsKUSlEqWh/" },
  { url: "https://www.instagram.com/reel/DUUCja0EYrx/" },
  { url: "https://www.instagram.com/reel/DZnZzgFBfBN/" },
];
