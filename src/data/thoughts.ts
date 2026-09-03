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
    slug: "start-writing",
    title: "start writing",
    date: "september 2026",
    body: [
      "this weekend i was sitting on my couch in dtla with my closest high school friends, talking about life and updating each other on the phases we're all going through. one of them asked me, \"elsa, have you ever tried journaling? or putting your thoughts down?\"",
      "i responded with \"ew no, why would i do that.\"",
      "then they went on a whole pitch about how i should look back into my life and write things down, to help me think deep and break things down instead of move, move, and move.",
      "tbh, the past year has been great, and i wanna talk more about what i've learned being in my twenties for the first time. so i guess before i turn 21 i'll make a cringe little list of 20 lessons i've learned in my twenties.",
      "this past year i've been splitting my time between la and sf quite a lot. something no one tells you about is how lonely constantly shifting places feels. you never have a set closet, a set kitchen, you don't call anywhere home, and you're constantly living out of suitcases on the go. (i will dive deeper on this topic another time too.)",
      "i think by this point you can tell a bit about my writing style. honestly maybe it's because i'm still a fob, but i've always hated writing class and i feel like sometimes my thoughts don't even make sense. but this is my attempt at trying to journal and write a little diary to share with the world. no idea who's actually finding this and reading, but... hopefully this will help me with life reflections and slow things down a bit.",
    ],
  },
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
