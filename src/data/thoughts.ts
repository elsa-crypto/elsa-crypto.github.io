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
];
