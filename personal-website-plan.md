# Personal Website — Planning Doc

Tech-agnostic spec. Priorities, in order: (1) discoverability of expand + read-more, (2) simplicity, (3) fidelity to the reference aesthetic (dark-gray theme, colorful diagrams).

---

## 1. Goals & non-goals

**Goals**
- Single-column landing page: header → Summary → Work → Projects.
- Each Work/Project entry expands *in place* on the landing page to reveal a summary + links.
- Some entries additionally link out to a full article page via **[read more]**.
- Dark default with a light/dark toggle.
- Impossible to miss that entries expand and that some lead to articles.

**Non-goals**
- No blog index / "Writings" landing (dropped from reference site 1).
- No CMS, no search, no comments. Static content authored by hand.
- No framework lock-in. The data model below is plain enough for any static-site setup or hand-written HTML.

---

## 2. Design system

### Layout
- One centered column, max content width ~680–720px, generous horizontal margins.
- Same column width on landing and article pages for consistency.
- Vertical rhythm driven by section spacing; no sidebars, no multi-column.
- Mobile: column becomes full-width with ~20px side padding. No layout changes beyond that — it's already single-column.

### Typography
- Body + headings: **Cambria** (serif), matching the reference's warm serif feel. Stack: `Cambria, Georgia, 'Times New Roman', serif`.
- One family throughout. Weight/size/color carry hierarchy, not different fonts.
- Suggested scale: name ~28px bold, section headers ~20px bold, entry titles ~16–17px semibold, body ~16px, source line / meta ~14px muted.

### Color palette (dark default)
Modeled on reference site 2 — near-black, warm off-white text, muted accents. Define as tokens so the light theme is a swap, and so diagrams stay colorful in both themes.

| Token | Dark | Light | Use |
|---|---|---|---|
| `--bg` | `#161514` (warm near-black) | `#faf8f5` | page background |
| `--bg-raised` | `#1e1c1a` | `#f0ece6` | TL;DR / expanded panels, cards |
| `--text` | `#e8e3da` (warm off-white) | `#1a1a1a` | body |
| `--text-muted` | `#a19a8e` | `#6a6459` | meta, source line, contributors |
| `--border` | `#33302c` | `#d8d2c8` | rules, box borders |
| `--link` | `#7a9cc6` (muted blue) | `#3a5f8a` | inline links |
| `--accent` | `#c08a5e` (warm) | `#b5703a` | expand arrow, read-more, active toggle |

- Diagram colors: fixed multi-hue set (blue / rose / green / violet stripes as in the reference), tuned to read on both backgrounds. Keep as a separate `--diagram-*` palette so they don't get themed away.
- Transition `--bg`, `--text`, `--border` on theme switch (~150ms) so the toggle feels smooth.

### Theme toggle
- Sun/moon icon, top-right of the page (matches reference site 2 position).
- Persists choice (localStorage). Respects `prefers-color-scheme` on first visit.
- Present on both landing and article pages.

---

## 3. Header

Top of landing page, left-aligned:

```
Chris [Name]                         [☀/☾ toggle top-right]
you [at] domain [dot] com
GitHub   X   LinkedIn
```

- Email obfuscated in the `[at] / [dot]` style from reference site 1 (light spam protection, matches aesthetic).
- Socials: GitHub, X, LinkedIn only. Underlined text links, not icons — simpler and matches reference.
- No nav bar. No "Writings" link.

---

## 4. Sections

Order: **Summary → Work → Projects**.

### 4.1 Summary
- Section header **"About"** (or "Summary") + one short prose paragraph.
- No entries, no toggle. 2–5 sentences: who you are, focus areas, current affiliations.

### 4.2 Work & 4.3 Projects
Identical component, different content lists.

- Section header line: **`Work   ( Selected / All )`** — the Selected/All toggle sits inline next to the header, exactly like reference site 1's `Research (Selected / All)`.
  - Default view = **Selected** (curated subset).
  - **All** reveals the full list. Toggle swaps the visible entry set; it does not navigate away.
  - Each section has its **own independent** toggle.
- Under the header: a vertical list of **entries** (see §5).

---

## 5. Entry component (the core interaction)

Two states: **collapsed** (default) and **expanded**.

### Collapsed
```
▸  Entry Title                                    ⌄
   Contributor A, Contributor B, You
   Source · Year        e.g. "NeurIPS 2026" / "Berkeley DSS × AMD"
```
- Title line ends with a persistent **expand arrow** (`⌄` chevron) — see §6, this is the main discoverability device.
- Contributors: comma-separated; the site owner's name bolded to stand out in the list.
- Source line: muted, small. Venue / hackathon / conference / org.

### Expanded
Reveals below the source line, inside a subtly raised panel (`--bg-raised`) so the open state is obvious:
```
   [ short summary — 2–4 sentences ]
   GitHub   arXiv   Demo        … [read more →]   (only if an article exists)
```
- Links row: only the links that exist for that entry (GitHub, arXiv, demo, paper, etc.).
- **[read more →]** appears *only* for entries that have a full article. It's visually distinct from the plain links (accent color + arrow) so it reads as "go deeper," not just another link.
- Clicking **[read more]** navigates to the article page (§7). Everything else (expand, plain links) stays on the landing page.

### Interaction model
| Device | Trigger | Behavior |
|---|---|---|
| Desktop | **hover** | transient preview — expands while hovered, collapses on leave |
| Desktop | **click** | pins open — stays expanded after mouse leaves; click again (or the arrow) collapses |
| Mobile | **tap** | expands/collapses (no hover); pure toggle |

- Chevron **rotates 90° (▸ → ⌄) and recolors to `--accent`** whenever expanded, in every mode. This is the unmistakable "it's open / it opens" signal.
- Expansion animates height (~150–200ms ease) so it's clearly a reveal, not a page jump.
- Only one *pinned* entry per section at a time is optional — recommend allowing multiple open; simpler and less surprising.
- Keyboard: entry is focusable, Enter/Space toggles, arrow visible on focus.

---

## 6. Discoverability — making expand + read-more unmissable

This is the top priority. Layered cues so no single missed signal hides the functionality:

1. **Persistent expand arrow** on every entry (not hover-only). A visible `⌄`/`▸` chevron at the end of each title line tells users something opens *before* they interact. This is the single most important fix vs. the reference, where hover has zero affordance.
2. **Arrow rotates + recolors on open** to `--accent`, confirming the action worked and teaching the interaction on first use.
3. **First-entry hint (one-time):** the topmost entry of the Work section renders **pre-expanded on first load**, so the very first thing a visitor sees is an entry in its open state — summary, links, and a **[read more]** all visible. This demonstrates the pattern by example. Collapses normally once touched; state can persist so it doesn't re-open every visit.
4. **Subtle cursor + hover feedback:** entries show `cursor: pointer` and a faint background/border lift on hover, signaling clickability even before expansion.
5. **Micro-label near the first section header** (small, muted, one line): e.g. *"click any entry to expand · ⌄"*. Sits under the "Work (Selected / All)" line, low-key but explicit. Can fade after first interaction.
6. **[read more] styled as a distinct affordance:** accent color + trailing arrow `→`, visually separated from plain links, so within an expanded entry it's obvious which link goes to a full article vs. an external resource.
7. **Consistent raised panel** on expand (`--bg-raised` + slight inset) so open entries are visually distinct from collapsed ones down the page — reinforcing that entries are containers that open.

Net effect: a visitor sees (a) an already-open first entry, (b) chevrons on everything else, (c) a one-line hint, and (d) pointer cursor. Missing all four is near-impossible.

---

## 7. Article page template

Reached only via **[read more]** from an entry. Matches reference site 2 (Distilling Stockfish).

Structure, top to bottom:
1. **Back / Home link**, top-left (small). Theme toggle top-right (persists across pages).
2. **Title** (centered or left, larger serif).
3. **Meta line:** date · contributors (e.g. `May 2026 · Chris [Name], Coauthor`).
4. **TL;DR box:** bordered, `--bg-raised` panel at the top — a boxed abstract summarizing the piece (directly mirrors reference site 2). 3–6 sentences.
5. **Body:** single column, same width as landing. Prose with:
   - Section sub-headers and emphasis (bold lead-ins like *Loss.*, *Architecture.* in the reference).
   - **Inline diagrams:** colorful multi-hue SVG figures (the `--diagram-*` palette), full column width, rendered inline between paragraphs. Must stay colorful in both themes.
   - Optional footnotes / references (superscript → notes at bottom), as in the reference.
6. No sidebar, no TOC (keep simple). Add later only if an article gets long.

Authoring: each article is its own page/file. Diagrams authored as SVG (hand-written or exported) so they're crisp, themeable, and lightweight — no image assets needed.

---

## 8. Content data model

Keep content separate from markup so it's tech-agnostic and trivial to add entries. Each entry is a record:

```
- title:        string
  contributors: [string]          # owner's name flagged/bolded in render
  source:       string            # "NeurIPS 2026", "Berkeley DSS × AMD", etc.
  year:         string
  selected:     bool              # shown in "Selected" view
  section:      "work" | "project"
  summary:      string            # 2–4 sentences, shown on expand
  links:                          # only those present render
    github:  url?
    arxiv:   url?
    demo:    url?
    paper:   url?
  article:      slug?             # if present → [read more] links to /posts/<slug>
```

Articles are separate records/files keyed by `slug`: `{ title, date, contributors, tldr, body(+diagrams) }`.

Adding an entry = append one record. Promoting an entry to a full article = add an `article` slug + author the page. Nothing else changes.

---

## 9. Responsive behavior
- Single column already; mobile just narrows and pads.
- Toggles (Selected/All, theme) remain tap-targets ≥40px.
- Hover previews are desktop-only; mobile relies on tap — no functionality lost because the chevron + tap covers it.
- Diagrams scale to column width (SVG `width:100%`), never overflow.

---

## 10. Open items (defaults assumed, flag if wrong)
- **Summary section header wording:** "About" vs "Summary" — assumed "About".
- **Multiple pinned-open entries allowed** simultaneously — assumed yes.
- **First-entry-pre-expanded** hint applies to Work section only — assumed yes; could also apply to Projects.
- **Exact accent hue** (`--accent`) — placeholder warm tone; easy to retune.
- Name/email/handles — placeholders in header pending real values.
