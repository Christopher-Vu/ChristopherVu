# Mission

## Statement

A single-column personal website for Christopher Vu. The landing page reads top to bottom —
**header → Summary → Work → Projects** — where each Work and Project entry **expands in place** to
reveal a short summary and links, and select entries link out to a full **article page** via a
distinct `[read more →]` affordance. The site defaults to a warm dark-gray theme with a light/dark
toggle, and uses colorful inline diagrams on article pages. The aesthetic is a warm serif, near-black
background, muted accents.

## Priorities (in order)

1. **Discoverability of expand + read-more.** It must be impossible to miss that entries expand and
   that some lead to articles. This is the top priority and drives its own layer of design cues.
2. **Simplicity.** Static, hand-authored content; the smallest amount of machinery that works.
3. **Fidelity to the reference aesthetic.** Warm dark-gray theme, single serif family, colorful
   diagrams.

## Goals

- Single centered column: header, then Summary, then Work, then Projects.
- Each Work/Project entry expands in place to show a 2–4 sentence summary + only the links that exist.
- Some entries additionally link out to a full article page via `[read more →]`.
- Dark by default, with a persistent light/dark toggle (top-right on every page).
- Layered, unmissable cues that entries expand and that some lead to articles.

## Non-goals

- No blog index / "Writings" landing page.
- No CMS, no search, no comments.
- No framework lock-in in the content itself — content stays a plain data model, authored by hand.

## Guiding principles

- **Content is separated from markup.** Entries and articles are data records (see
  [tech-stack](./tech-stack.md)); adding an entry = appending one record, promoting it to an article
  = adding a slug + authoring one file. Nothing else changes.
- **Discoverability is layered and redundant.** No single missed cue hides the functionality: a
  persistent chevron, an already-open first entry, a one-line hint, and pointer/hover feedback all
  reinforce each other.
- **One family carries hierarchy.** A single serif type family throughout; weight, size, and color —
  not different fonts — express hierarchy.
- **Themeable by token, diagrams excepted.** Color lives in CSS custom-property tokens so the light
  theme is a swap; diagram colors are a separate palette kept out of theming so figures stay
  colorful in both modes.

## Assumed defaults (change if wrong)

- Summary section header wording: **"About"**.
- Multiple entries may be pinned open simultaneously.
- The first-entry-pre-expanded hint applies to the **Work** section only.
- Name, email, and social handles are placeholders until real values are supplied.

See [roadmap](./roadmap.md) for build order and [tech-stack](./tech-stack.md) for committed
technology choices.
