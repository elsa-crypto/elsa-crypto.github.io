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
  /** Optional external link — makes the project name clickable. */
  href?: string;
}

// Things I'm building. Order here = order on /work.
export const building: BuildEntry[] = [
  {
    name: "ditto internal tools",
    description:
      "small tools that make growth, ops, content, and campaign execution faster.",
    status: "building",
  },
  {
    name: "network by ditto",
    href: "https://networkbyditto.com",
    description:
      "an experimental networking product for college students based on interests. launched at usc demo day.",
    status: "experiment",
  },
  {
    name: "marketing stunt websites",
    href: "https://ditto.ai/comp-gap",
    description:
      "experimental marketing site that drove a 40% MoM lift in website visits.",
    status: "ongoing",
  },
  {
    name: "personal website",
    description: "index for my personal growth.",
    status: "you are here",
  },
];
