# Content Guide — Adding/Editing Entries & Articles

How to add or edit Work/Project entries and their optional articles. No build tooling or
generators involved — everything is hand-authored per [tech-stack](./tech-stack.md).

## Adding or editing an entry

Entries live in `src/content/entries.ts`, in the `entries` array. Each entry is one object:

```ts
{
  title: "Sample Research Project",
  contributors: ["Christopher Vu", "Coauthor Name"], // owner's name auto-bolds on render
  source: "NeurIPS 2026",        // venue / org / hackathon
  year: "2026",
  date: "2026-05-01",            // ISO date, used only by the "Date" order-by view
  order: 0,                      // curated rank within its section; lower = earlier in "Selected" order
  section: "work",               // "work" | "project"
  summary: "2-4 sentence summary shown when the entry expands.",
  links: {                       // omit any key that doesn't apply — only present links render
    github: "https://github.com/...",
    arxiv: "https://arxiv.org/...",
    demo: "https://...",
    paper: "https://...",
  },
  article: "some-slug",          // optional — see "Adding an article" below. Omit for no article.
}
```

To add an entry: append a new object to the `entries` array. That's it — it'll show up in its
section automatically, sorted correctly under both order-by views.

To edit an entry: change the fields directly. Notes:
- `order` only matters for the "Selected" order-by view — it's your curated ranking, independent
  of `date`. Two entries can share the relative order they'd have either way; there's no
  requirement that `order` matches chronological order.
- `date` only matters for the "Date" order-by view (newest first). Use real dates even for older
  entries so that sort stays meaningful.
- The landing page shows the top `DEFAULT_VISIBLE_COUNT` entries (currently 3, defined at the top
  of `entries.ts`) per section until "Load more" is clicked — this is automatic based on list
  length, nothing to configure per-entry.
- `links` — only include keys that have a real URL. An empty/missing key simply doesn't render
  a link.

## Adding or editing an article

Articles are optional — only entries with an `article: "<slug>"` field show the
`[read more (article) →]` affordance. An article is one MDX file:

`content/posts/<slug>.mdx`

```mdx
---
title: "Sample Research Project"
date: "2026-01-01"
contributors: ["Christopher Vu", "Coauthor Name"]
---

**Motivation.** Prose paragraph. Bold lead-in phrases (like this one) mark section starts
without needing a full heading.

**Approach.** More prose. Use `## Heading` / `### Subheading` for actual section breaks if the
article is long enough to need them.

<SampleDiagram />

Diagrams are React components rendered inline — see "Adding a diagram" below.

**Results.** Closing prose.
```

To add an article:
1. Create `content/posts/<slug>.mdx` with frontmatter `{ title, date, contributors }` (all
   required) and MDX body content below the `---`.
2. Set `article: "<slug>"` on the corresponding entry in `entries.ts` (slug must match the
   filename, without `.mdx`).
3. That's it — `/posts/<slug>` renders automatically; no route registration needed
   (`generateStaticParams` in `src/app/posts/[slug]/page.tsx` picks up every file in
   `content/posts/`).

To edit an article: edit the `.mdx` file directly — frontmatter fields and prose both live there.

Notes:
- No TL;DR/abstract field — the entry's expand-panel `summary` on the landing page already serves
  that purpose, so the article goes straight from the meta line into the body.
- `date` here is independent of the entry's `date` field (they usually match, but nothing enforces
  it) and is formatted as "Month Year" on the article page.
- Removing the `article` field from an entry (or deleting the entry) does *not* delete the MDX
  file — clean up `content/posts/<slug>.mdx` by hand if it's no longer referenced.

## Adding a diagram

Diagrams are hand-authored inline SVG, wrapped in a small React component so they can be reused
and reference the theme-independent diagram palette (`--diagram-blue`, `--diagram-rose`,
`--diagram-green`, `--diagram-violet` — see [tech-stack](./tech-stack.md)).

1. Add a component under `src/components/diagrams/`, e.g. `MyDiagram.tsx`, following the shape of
   the existing `SampleDiagram.tsx`: an `<svg width="100%" viewBox="...">` using `fill="var(--diagram-*)"`
   for color so it stays legible in both themes.
2. Register it in the `mdxComponents` map in `src/app/posts/[slug]/page.tsx`.
3. Reference it in the article's MDX body as a normal tag, e.g. `<MyDiagram />`.

Each article can use any registered diagram any number of times; there's no per-article diagram
registration needed beyond the shared map in the page component.
