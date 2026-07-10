# Considered — site structure & voice guide (for copy-polishing AI)

Live site: https://judithxxy.github.io (EN default, /zh/ 简体中文, /ja/ 日本語 — ja is out of
scope for this pass). You are being asked to polish copy only. This file gives you the layout
each string lives in, and the voice rules that must survive your edits.

## What this site is

A hand-picked collection of AI products made with care, curated by one person (a product
manager who builds AI products). Core stance: inclusion is the endorsement; no paid
placements; no auto-listing; taste is the scarce resource in the AI era. The site reads as
an "engineering archive with a human annotator": machine-precise specs in monospace, and the
editor's personal voice in serif. It is an exhibition, not a funnel — there is no CTA to
convert, nothing to buy.

## Page inventory & layout

### Homepage (/)
1. Topbar: serif wordmark "Considered." · nav (Criteria / Index / About) · language dropdown
2. Hero: bold grotesque H1 (second line in royal blue) · one short sub-paragraph ·
   mono count line ("Currently 8 entries · 2 on the radar") · a blueprint-style
   technical illustration on the right (an exploded device, one part circled in vermilion)
3. Criteria: two columns — "What Considered looks for" / "What it passes on", 4 hairline
   rows each
4. Index: one expanded block per product — large image (1200×630) · favicon + name ·
   tagline · the editor's one-line verdict in serif italics · mono [tags] ·
   "Editor's notes →" link
5. On the radar: lighter single-line list (favicon + name · category · verdict) for
   newly-launched products not yet lived with
6. Footer: wordmark + slogan ("Chosen, not listed.") · RSS link · © line

### Product page (/p/<slug>/)
1. Back link · (radar only: "On the radar" badge) · favicon + product name (H1) · tagline
2. Meta table (all monospace): Category / Platform / Pricing / Good for (tags) / Link /
   Launched
3. Product visual on a "specimen plate" (platinum panel, corner marks, mono caption)
4. "Where it shines": three 1–5 dimensions shown as icon pips — Craft (gems),
   Originality (bulbs), Technology (chips). A profile, never a ranking.
5. "Editor's notes" (radar: "Why I'm watching"): 2–4 serif paragraphs — the heart of
   every page
6. "At a glance": three fixed factual sections — What it does / Details worth noting /
   Who it's for
7. "You might also appreciate": 1–2 related entries
8. Prev/next walk (collection entries only)

### About (/about/)
Manifesto (6 short paragraphs) · "The editor" intro with X/LinkedIn/RSS links ·
"Recommend a product" invitation with email.

### 404
"Not in the collection." + two links.

## Voice rules — these must survive any polish

1. **Editor's notes are personal appreciation, never a verdict from above.** First-person
   "I", grateful and specific. Banned framings: "earns its place", "deserves",
   "qualifies", anything tribunal-flavored. The editor is a fan taking notes, not a judge.
2. **Notes are written for scanners.** The first sentence of the notes — and of each
   paragraph — carries the sharpest claim. Backstory lives in subordinate clauses. If a
   reader takes only two lines, they got the point.
3. **Every claim in the notes traces to the editor's real experience or stated opinion.**
   Do not add anecdotes, superlatives, or opinions. Tighten wording; never invent content.
   Where notes disclose light usage (Dia, Lovable), the disclosure is deliberate
   trust-building — keep it.
4. **"At a glance" is facts only.** No judgment words (great / stunning / recommended).
   All evaluative language belongs to the notes.
5. **Verdicts** are ≤ ~12 words, personal, concrete ("It won me over before the onboarding
   ended", "The Notion of slides"). **Highlights** are excerpts selected from the notes,
   lightly trimmed — not new writing.
6. **No marketing clichés** (elevate, seamless, unleash, game-changing, next-gen). No
   exclamation marks. The register is a sharp product person writing a personal column.
7. Chinese copy should read as natively written Chinese (it largely originates from the
   editor's spoken Chinese), never as translated English. Keep product names and feature
   names (Audio Overviews, Wireframer…) in English.

## What we want from you

Polish for clarity, rhythm, and precision within the rules above. Return edits **in the
same file structure** (copy-en.md / copy-zh.md), marking every changed string, so the
maintainer can diff and apply. Flag anything you think violates the site's own stated
standards rather than silently rewriting it.
