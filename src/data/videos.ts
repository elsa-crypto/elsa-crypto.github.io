export interface Video {
  src: string;
  poster: string;
  /** CSS aspect-ratio matching the video, e.g. "16 / 9" or "4 / 3". */
  aspect: string;
  caption?: string;
}

// Self-hosted videos shown on /media, in order. Drop new ones in public/videos/
// (web-optimized mp4 + a poster jpg) and add an entry here.
export const videos: Video[] = [
  {
    src: "/videos/ditto-film.mp4",
    poster: "/videos/ditto-film.jpg",
    aspect: "4 / 3",
    caption: "ucla wednesday launch",
  },
  {
    src: "/videos/ditto-film-2.mp4",
    poster: "/videos/ditto-film-2.jpg",
    aspect: "1482 / 1080",
    caption: "ditto launch",
  },
  {
    src: "/videos/phs-nhs-music-video.mp4",
    poster: "/videos/phs-nhs-music-video.jpg",
    aspect: "16 / 9",
    caption: "hs project",
  },
];
