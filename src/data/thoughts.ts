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
      "i'm writing this on a plane to hawaii while building this website. it's the first real stretch of quiet i've had in a while, and i want to use it to think clearly — partly to prove to myself i'm still a person with thoughts, and not just a to-do list.",
      "a year ago i dropped out of usc. real estate finance, my dream school, junior year, 3.9 gpa — the kind of thing you're not supposed to walk away from. i left to move to sf and work at early-stage startups, because i wanted a kind of freedom the safe path was never going to give me.",
      "the longer i spend in tech, the more one thing stands out: it is almost entirely male. there are a few women, sure. but look closely, and most of us are in growth or marketing. very few are building the companies themselves.",
      "so i keep coming back to a simple question: where are the female founders?",
      "yesterday i applied to yc's london demo day and went looking. every founder speaker was a man. there was exactly one female vc in the whole batch. and every young, successful founder i've actually met has been a guy. at some point a pattern stops feeling like a coincidence.",
      "i don't think the explanation is that women can't build. my guess is that almost no one expects us to — so we quietly sort ourselves into the supporting seats, the growth seat, the marketing seat, and learn to call that ambition.",
      "i don't want to just be good at growth. i want to be the one who builds the thing — who takes an industry and changes its shape. if the stereotype is that girls in tech do the marketing, then the most useful thing i can do is become a counterexample.",
    ],
  },
];
