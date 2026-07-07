# Roadmap

High-level implementation order. Phases, not tickets. Each phase is buildable on the ones before it
— no phase depends on a later one. Ties back to the [mission](./mission.md) priorities and the
[tech-stack](./tech-stack.md) choices.

1. **Project scaffold**
   Next.js + TypeScript app, ESLint + Prettier, base layout, and a deploy skeleton wired to Vercel.
   Pin Node/Next; pick the package manager.

2. **Design tokens & theme**
   CSS custom-property token table (dark + light + separate diagram palette), the theme toggle
   (`localStorage` persist + `prefers-color-scheme` first visit, ~150ms transition), Cambria serif
   typography, and the centered ~700px column shared by all pages.

3. **Content model**
   Typed `Entry` records + sample data, and the MDX article pipeline keyed by slug
   (`content/posts/<slug>.mdx` with frontmatter).

4. **Landing page skeleton**
   Header (obfuscated `[at]/[dot]` email, GitHub / X / LinkedIn text links, no nav bar), the
   About/Summary section, and Work & Projects section shells.

5. **Entry component (core interaction)**
   Collapsed and expanded states, raised panel on open, the links row, and the distinct
   `[read more →]` affordance. Desktop hover-preview + click-to-pin, mobile tap, keyboard toggle.

6. **Discoverability layer** *(priority #1 — its own phase)*
   Persistent chevron that rotates and recolors to `--accent` on open, first-entry pre-expanded on
   the Work section, a one-line muted micro-hint under the first section header, and pointer/hover
   feedback on entries.

7. **Selected / All toggles**
   Independent per-section view switch inline with each section header; swaps the visible entry set
   without navigating.

8. **Article page template**
   Back/home link (top-left) + theme toggle (top-right), title, meta line (date · contributors),
   bordered TL;DR box, MDX body with bold lead-ins, and inline colorful SVG diagrams.

9. **Responsive & accessibility pass**
   Mobile side padding, tap targets ≥40px, visible focus states, diagrams at `width:100%` with no
   overflow.

10. **Content pass & polish**
    Real name / email / social handles, retune the accent hue, and author the first article(s).
