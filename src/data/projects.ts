export interface WorkEntry {
  title: string;
  role?: string;
  description: string;
  items?: string[];
  // Metrics to surface ONLY once you have verified, publicly shareable numbers.
  // Leave as-is and they render as muted placeholders.
  placeholders?: string[];
}

// Selected work. Keep descriptions high-level — no confidential details,
// no invented numbers. Fill the placeholders only with approved figures.
export const work: WorkEntry[] = [
  {
    title: "ditto",
    role: "head of growth",
    description:
      "helping build and distribute a consumer social product focused on intentional connection.",
    items: [
      "product launches",
      "social and content strategy",
      "growth experiments",
      "creator and influencer campaigns",
      "college and intern communities",
      "real-world events",
      "brand partnerships",
      "landing pages",
      "viral concepts",
      "user acquisition experiments",
      "product feedback and positioning",
    ],
    placeholders: [
      "[approved growth metric]",
      "[approved event attendance]",
      "[approved social reach]",
      "[approved launch result]",
    ],
  },
  {
    title: "experiential growth",
    description:
      "offline experiences designed to turn online attention into real communities — distribution experiments, not just events.",
    items: [
      "startup office events",
      "intern social mixers",
      "run clubs",
      "launch parties",
      "city-based gatherings",
      "brand collaborations",
      "unconventional street marketing",
    ],
  },
  {
    title: "consumer content",
    description:
      "social content built around cultural relevance, shareability, humor, and how people actually behave on each platform.",
    items: [
      "finding strong hooks",
      "platform-native behavior",
      "a recognizable personal voice",
      "making startup content feel less corporate",
      "turning product ideas into stories people care about",
    ],
  },
];
