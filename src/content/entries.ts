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
  date: string; // ISO date, used for the "Date" order
  order: number; // curated rank within its section (lower = earlier)
  section: "work" | "project";
  summary: string;
  links: EntryLinks;
  article?: string;
};

export const OWNER_NAME = "Christopher Vu";

export const DEFAULT_VISIBLE_COUNT = 3;

export const entries: Entry[] = [
  {
    title: "Sample Research Project",
    contributors: ["Christopher Vu", "Coauthor Name"],
    source: "NeurIPS 2026",
    year: "2026",
    date: "2026-05-01",
    order: 0,
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
    date: "2026-02-15",
    order: 1,
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
    date: "2025-08-01",
    order: 2,
    section: "work",
    summary:
      "Placeholder summary for an entry that only shows up once 'Load more' is used.",
    links: {
      github: "https://github.com/example/older",
    },
  },
  {
    title: "Earliest Work Sample",
    contributors: ["Christopher Vu"],
    source: "Internal Project",
    year: "2024",
    date: "2024-03-01",
    order: 3,
    section: "work",
    summary:
      "Placeholder summary for a fourth entry, hidden until 'Load more' is clicked in either order.",
    links: {
      github: "https://github.com/example/earliest",
    },
  },
  {
    title: "Sample Personal Project",
    contributors: ["Christopher Vu"],
    source: "Personal",
    year: "2026",
    date: "2026-04-01",
    order: 0,
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
    date: "2025-11-01",
    order: 1,
    section: "project",
    summary:
      "Placeholder summary for a second project, shown once 'Load more' is used.",
    links: {
      github: "https://github.com/example/project-two",
    },
  },
  {
    title: "Earlier Project",
    contributors: ["Christopher Vu"],
    source: "Personal",
    year: "2024",
    date: "2024-06-01",
    order: 2,
    section: "project",
    summary:
      "Placeholder summary for a third project, hidden until 'Load more' is clicked in either order.",
    links: {
      github: "https://github.com/example/project-three",
    },
  },
  {
    title: "Earliest Project",
    contributors: ["Christopher Vu"],
    source: "Personal",
    year: "2023",
    date: "2023-09-01",
    order: 3,
    section: "project",
    summary:
      "Placeholder summary for a fourth project, hidden until 'Load more' is clicked in either order.",
    links: {
      github: "https://github.com/example/project-four",
    },
  },
];

export function getEntriesBySection(section: Entry["section"]): Entry[] {
  return entries.filter((entry) => entry.section === section);
}
