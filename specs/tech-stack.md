# Tech Stack

This file resolves the "tech-agnostic" open question from the planning doc with committed choices.
It supports the [mission](./mission.md) priorities: simplicity and fidelity to the aesthetic.

## Framework

- **Next.js** (App Router) with **React** and **TypeScript** (strict mode).
- Static-friendly: pages are statically rendered; only the interactive bits are client components.
- Rationale: first-class MDX support, clean deploys to Vercel, and a familiar React component model
  for the handful of interactive pieces.

## Content model

Content is data, kept separate from markup.

- **Entries** — typed records (TS/JSON) matching the planning-doc data model:

  ```ts
  type Entry = {
    title: string;
    contributors: string[];   // owner's name flagged/bolded on render
    source: string;           // "NeurIPS 2026", "Berkeley DSS × AMD", etc.
    year: string;
    selected: boolean;        // shown in the "Selected" view
    section: "work" | "project";
    summary: string;          // 2–4 sentences, shown on expand
    links: {
      github?: string;
      arxiv?: string;
      demo?: string;
      paper?: string;
    };
    article?: string;         // slug → [read more] links to /posts/<slug>
  };
  ```

- **Articles** — authored as **MDX** files keyed by slug, e.g. `content/posts/<slug>.mdx`, one file
  per article. Frontmatter carries `{ title, date, contributors, tldr }`; the MDX body holds the
  prose. MDX lets diagrams be inline SVG or small React components while staying colorful in both
  themes.

## Styling

- **CSS custom properties** for the full token system: `--bg`, `--bg-raised`, `--text`,
  `--text-muted`, `--border`, `--link`, `--accent`, plus a separate `--diagram-*` palette kept out
  of theming so figures stay colorful in both modes.
- Theme via a `data-theme` attribute on `<html>`; first visit respects `prefers-color-scheme`, choice
  persisted to `localStorage`. Transition `--bg`, `--text`, `--border` (~150ms) on switch.
- Plain CSS / CSS Modules (no utility framework) so the token table stays the single source of truth
  — keeps priority #2 (simplicity) intact.
- **Fonts:** single serif family — `Cambria, Georgia, 'Times New Roman', serif`.
- Layout: one centered column, ~680–720px max content width, shared between landing and article pages.

## Interactivity

Minimal client components only:

- Entry expand/collapse (hover-preview on desktop, click-to-pin, tap on mobile, keyboard toggle).
- Per-section Selected/All view toggle (independent per section).
- Theme toggle (persist + `prefers-color-scheme`).

Everything else is server-rendered/static.

## Hosting & tooling

- **Hosting:** Vercel — Git-push deploys with preview URLs.
- **Tooling:** ESLint + Prettier; TypeScript strict. Node and Next versions pinned.
- **Package manager:** TBD (npm or pnpm) — decide at scaffold time.

See [roadmap](./roadmap.md) for the order these come online.
