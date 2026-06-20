export interface Thought {
  slug: string;
  title: string;
  date?: string;
  /** One paragraph per string. */
  body: string[];
}

// Brain dumps / essays. Newest first (top of the array).
// To publish a new one, add an entry — it shows on /brain-dumps and gets its
// own page at /brain-dumps/<slug>.
export const thoughts: Thought[] = [
  {
    slug: "female-in-startups",
    title: "first dump — female in startups",
    date: "june 2026",
    body: [
      "Hi, currently sitting on a plane to hawaii while building this site.",
      "Honestly want to utilize this peace of mind time to reflect on recent changes in my life, and prove I am still a functional human with thoughts.",
      "Dropped out of usc as a real estate finance major (my dream school) as a junior with 3.9 gpa.",
      "Moved to sf building in early stage startups, and getting involved in tech has made me realize something.",
      "Why is this a purely male dominated field?",
      "Yes, there are a few girls like me, but most are either in growth or marketing. Why aren't there any female founders?",
      "Yesterday, I applied to YC London demo day and quickly found out all the founder speakers are male, and there was only one female vc in the whole batch.",
      "Tbh, all the young successful founders I've interacted with are male — so I want to change the stereotype, and not only be someone doing growth, but someone who will revolutionize an industry as a founder.",
    ],
  },
];
