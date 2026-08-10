export type EntryLinks = {
  github?: string;
  arxiv?: string;
  demo?: string;
  paper?: string;
  x?: string;
  dataset?: string;
  models?: string;
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
    title: "LOCUS: A Local Ordinance Corpus for the United States",
    contributors: [
      "Denis Peskoff",
      "Joseph Barrow",
      "Christopher Vu",
      "Diag Davenport",
    ],
    source: "NeurIPS 2026 Submission",
    year: "2026",
    date: "2026-05-01",
    order: 0,
    section: "work",
    summary:
      "LOCUS is the largest corpus of American city/county law. My main contribution was section 5: using pairwise LLM-as-judge matchups and trueskill rankings to score a sample of laws on subjective axes (e.g. opacity), then training a family of ModernBERT regressors to score the rest of the corpus.",
    links: {
      x: "https://x.com/barrowjoseph/status/2067993371541492025",
      dataset: "https://huggingface.co/datasets/LocalLaws/LOCUS-v1",
      models: "https://huggingface.co/LocalLaws",
      arxiv: "https://arxiv.org/abs/2606.19334",
    },
  },
  {
    title: "AutoViz: GPU Trace Analysis on LLM Inference Workloads",
    contributors: ["Christopher Vu", "AMD Silo AI Team"],
    source: "Contract - AMD",
    year: "2026",
    date: "2026-04-01",
    order: 1,
    section: "work",
    summary:
      "A system that ingests two GPU inference traces, detects repeating kernel subsequences, matches them across builds, and flags performance regressions.",
    links: {},
    article: "amd-dss-trace-analysis",
  },
  {
    title: "Hallmate: Fullstack Digital Hall Pass",
    contributors: ["Christopher Vu", "Gavin-Kai Vida", "Angad Batra"],
    source: "Commissioned by ABCUSD",
    year: "2024–2025",
    date: "2025-01-01",
    order: 2,
    section: "work",
    summary:
      "Developed a Django/Nuxt digital hall pass for Whitney High School. Added a RAG pipeline so that teachers could talk about student hall data. Hosts 400+ students today and cut hall time by ~30%. Somehow got 2nd at the Congressional App Challenge after winning it the previous year with a static website 😞.",
    links: {},
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
