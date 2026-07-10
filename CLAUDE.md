# Considered (working title) — a hand-picked index of crafted AI products

Pure static site (Astro). No backend, no runtime AI. AI exists only in the publishing
workflow: the editor provides product info + her review, AI generates a well-formed
product entry page.

## Hard rules

1. **Editor's notes are distilled, not invented.** The editor narrates her experience
   of each product (often in Chinese, often unstructured); AI organizes it into the
   English `review` paragraphs. Every point must trace back to something she actually
   said — never add opinions, anecdotes, or praise she didn't express. She reviews and
   signs off on the distilled version before it ships.
2. **Editor's notes are written for the reader, not as a transcript.** Her telling's
   order is raw material. Readers scan: the first sentence of the notes — and of each
   paragraph — carries the sharpest claim; backstory gets compressed into supporting
   clauses or cut. If someone reads only two lines, they already have the point.
3. **Tone: personal appreciation, never a verdict from above.** The site's voice is
   first-person "I", grateful and specific — what she felt, what won her over. Banned
   framings: "what earns the entry", "deserves", "qualifies", anything that sounds
   like a tribunal judging products. The editor is a fan taking notes, not a judge
   issuing rulings.
4. **The "At a glance" body is facts, not opinions.** Objective information only:
   what it does, notable details, who it's for. No judgment words — the personal
   perspective lives only in the editor's notes.
5. **Scores are a profile, not a ranking.** Three dimensions in `scores` (1–5):
   `craft` (polish and detail in the experience), `originality` (opened a new
   interaction pattern or category), `tech` (how much the underlying technology
   carries the experience). They describe where a product shines; they are never used
   to compare or rank entries against each other. The editor sets or confirms every
   number.
6. ⚠️ Placeholder status: notes for **Wispr Flow / Granola / Tolan / Dia / NotebookLM**
   are distilled from the editor's real tellings (2026-07-08), pending her final
   sign-off. **Lovable, Sesame, Gamma, and Framer** still carry AI-written placeholder
   notes and AI-guessed scores; replace each as the editor narrates them. The radar
   entries (Clicky, Marble) reflect her real first impressions.

## Languages

Three locales: English (default, at `/`), Simplified Chinese (`/zh/`), Japanese
(`/ja/`). Never mix languages within one locale's pages.

- UI strings live in `src/i18n.ts` (all three locales in one file)
- Content: `src/content/products/` (en), `products_zh/`, `products_ja/` — same slugs,
  same schema; language-neutral fields (name/url/platform/scores/related/date/images)
  stay identical across locales
- Pages are shared components (`HomePage.astro`, `ProductPage.astro`) with thin
  per-locale routes; About pages are written per locale
- hreflang alternates are emitted in `Base.astro`; the language switcher maps the
  current path across locales
- ⚠️ Translations of the editor's notes are drafts until the editor approves them —
  she reviews zh herself and spot-checks ja before anything ships
- RSS stays English-only at `/rss.xml`

## Two tiers

`status` in frontmatter separates them:

- **`collection`** (default) — products the editor has used and lived with. Full
  editor's notes (distilled from her telling), scores, and a place in the prev/next
  walk. Entries are NOT numbered or ranked against each other — the index shows the
  date each was added instead.
- **`radar`** — newly launched or still-in-testing products whose direction she finds
  promising. **No scores** (she hasn't lived with them), one short "Why I'm watching"
  paragraph (first impressions + the open question she's waiting to answer), not part
  of the walk. Shown in a lighter "On the radar" list below the index.

When she's used a radar product enough, it graduates: she narrates it properly, gets
full notes + scores, `status` flips to `collection` with a fresh `date`. A graduation
is worth a social post of its own.

## Adding a product

The editor provides: product name, URL, her review (one or more paragraphs). Then:

1. Create `src/content/products/<slug>.md` (slug = lowercase product name)
2. Fill the frontmatter per the schema in `src/content.config.ts`:
   - `verdict`: **select** (not write) the shortest high-information sentence from the
     review; confirm the pick with the editor
   - `review`: the review verbatim, split into an array by paragraph
   - Product facts (platform / pricing / category): check the official site if not
     provided; ask if unverifiable
3. Add `tags` (2–3, need-oriented and lowercase — what a visitor would scan for:
   "meetings", "writing", "kids") and fetch the visuals:
   - `scripts/fetch-og-image.sh <slug> <url>` → `image` (og:image; leave unset if the
     site has none, e.g. NotebookLM — pages handle its absence)
   - `scripts/fetch-favicon.sh <slug> <url>` → `favicon` (product logo, shown before
     the name in the radar list)
4. Write the "At a glance" body with three fixed sections: `## What it does`,
   `## Details worth noting`, `## Who it's for` — all objective statements
5. Draft a social post to `social/<slug>.md` (English X version + Chinese 小红书
   version, both grounded in the editor's review; drafts only, never auto-post)
6. Preview with `npm run dev` and get the editor's sign-off before calling it done

## Site structure

- `/` — manifesto hero, criteria, index list
- `/about/` — "Why this exists" (the editor's thesis: building got easy, taste is scarce)
- `/p/<slug>/` — product entry pages
- `/rss.xml` — RSS feed (generated by `src/pages/rss.xml.ts`); update the `site` URL in
  `astro.config.mjs` before going live
- `social/` — social post drafts per entry (not published to the site)

## Commands

- `npm run dev` — local preview (localhost:4321)
- `npm run build` — build to `dist/`, deployable on any static host

## Design notes

Editorial/gallery direction: warm paper background, serif display type
(Instrument Serif + Instrument Sans), table-of-contents layout, vermilion as the
single accent color. Keep restraint when touching styles — no card shadows, no
gradients. Design tokens live at the top of `src/styles/global.css`.

Icons: inline Lucide SVGs via `src/components/Icon.astro`, sourced with
`npx better-icons get lucide:<name>` (strip the odd `fill="currentColor"` from
stroke paths when adding). Functional positions only — meta labels, links,
navigation arrows, RSS — never decorative, never one per heading.
