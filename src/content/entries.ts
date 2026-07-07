export type EntryLinks = {
  github?: string;
  arxiv?: string;
  demo?: string;
  paper?: string;
};

export type Entry = {
  title: string;
  contributors: string[];
  source: string;
  year: string;
  selected: boolean;
  section: "work" | "project";
  summary: string;
  links: EntryLinks;
  article?: string;
};

export const OWNER_NAME = "Christopher Vu";

export const entries: Entry[] = [
  {
    title: "Sample Research Project",
    contributors: ["Christopher Vu", "Coauthor Name"],
    source: "NeurIPS 2026",
    year: "2026",
    selected: true,
    section: "work",
    summary:
      "A short two-to-four sentence summary of the project goes here. It explains the problem, the approach, and the headline result in plain language.",
    links: {
      github: "https://github.com/example/example",
      arxiv: "https://arxiv.org/abs/0000.00000",
    },
    article: "sample-article",
  },
  {
    title: "Another Piece of Work",
    contributors: ["Christopher Vu"],
    source: "Berkeley DSS x AMD",
    year: "2026",
    selected: true,
    section: "work",
    summary:
      "Placeholder summary describing the second entry. Two to four sentences covering motivation, method, and outcome.",
    links: {
      demo: "https://example.com/demo",
    },
  },
  {
    title: "Older Work Sample",
    contributors: ["Christopher Vu", "Another Collaborator"],
    source: "Internal Project",
    year: "2025",
    selected: false,
    section: "work",
    summary:
      "Placeholder summary for an entry that only shows up in the All view, not the Selected view.",
    links: {
      github: "https://github.com/example/older",
    },
  },
  {
    title: "Sample Personal Project",
    contributors: ["Christopher Vu"],
    source: "Personal",
    year: "2026",
    selected: true,
    section: "project",
    summary:
      "Placeholder summary for a personal project. Describes what it is, why it was built, and what it does.",
    links: {
      github: "https://github.com/example/project",
      demo: "https://example.com/project-demo",
    },
  },
  {
    title: "Another Project",
    contributors: ["Christopher Vu"],
    source: "Personal",
    year: "2025",
    selected: false,
    section: "project",
    summary:
      "Placeholder summary for a second project, visible only in the All view.",
    links: {
      github: "https://github.com/example/project-two",
    },
  },
];

export function getEntriesBySection(section: Entry["section"]): Entry[] {
  return entries.filter((entry) => entry.section === section);
}
