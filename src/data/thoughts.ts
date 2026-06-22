export interface Thought {
  slug: string;
  title: string;
  date?: string;
  /** One paragraph per string. */
  body: string[];
}

// Brain dumps / essays. Newest first (top of the array).
// To publish a new one, add an entry. it shows on /brain-dumps and gets its
// own page at /brain-dumps/<slug>.
export const thoughts: Thought[] = [
  {
    slug: "female-in-startups",
    title: "first dump: female in startups",
    date: "june 2026",
    body: [
      "i'm sitting on a plane to hawaii right now, building this site. honestly i just want to use the quiet to reflect on everything that's changed lately, and to prove to myself i'm still a functional human with thoughts.",
      "a year ago i dropped out of usc. real estate finance, my dream school, junior year, 3.9 gpa. the kind of thing you're not really supposed to walk away from. i left to move to sf and work at early stage startups, because i wanted a kind of freedom the safe path was never going to give me.",
      "the longer i spend in tech, the more one thing stands out. it's almost entirely male. there are a few women, sure, but look closely and most of us are in growth or marketing. very few are building the companies themselves.",
      "so i keep coming back to one question. where are the female founders?",
      "yesterday i applied to yc's london demo day and actually looked at who was there. every founder speaker was a man. there was exactly one female vc in the whole batch. and honestly, every young successful founder i've met in person has been a guy. at some point it stops feeling like a coincidence.",
      "but i want to be clear about something. i'm not writing this to make a big claim, or to be mad about it. the truth is i don't really know why it's like this, and that's exactly what makes me curious. maybe it's confidence, maybe it's who gets encouraged early, maybe it's a hundred little things i can't see yet. mostly i just want to understand it, and i genuinely want to hear how other people see it, especially the women who've actually done it. i'd rather sit with the question and learn than pretend i already have the answer.",
      "what i do know is that i don't want to just be good at growth. i want to learn how to build the real thing. so for now i'm staying curious, asking a lot of questions, and slowly trying to become a counterexample.",
    ],
  },
];
