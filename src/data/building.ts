export type Status =
  | "building"
  | "you are here"
  | "experiment"
  | "ongoing"
  | "exploring";

export interface BuildEntry {
  name: string;
  description: string;
  status: Status;
}

// Things I'm building. Some are real projects, some are intentionally just
// experiments — that's the point. Update the status as things evolve.
export const building: BuildEntry[] = [
  {
    name: "ditto internal tools",
    description:
      "small tools that make growth, ops, content, and campaign execution faster.",
    status: "building",
  },
  {
    name: "personal website",
    description:
      "a living index of my work, ideas, and progression from growth operator to technical builder.",
    status: "you are here",
  },
  {
    name: "network by ditto",
    description:
      "an experimental networking product for college students based on interests, goals, personality, major, and industry — not dating.",
    status: "experiment",
  },
  {
    name: "marketing stunt websites",
    description:
      "small, fast sites built around campaigns, launches, jokes, or internet experiments.",
    status: "ongoing",
  },
  {
    name: "consumer social experiments",
    description:
      "prototypes exploring matchmaking, compatibility, online identity, and how people discover one another.",
    status: "exploring",
  },
];
