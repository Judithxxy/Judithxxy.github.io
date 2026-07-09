---
name: add-product
description: Add a new AI product entry to the Considered index. Use when the editor provides a product name/URL and her review and asks to add, include, or generate a product page.
---

# Add a product entry

First ask (or infer from how the editor talks about it): is this a **collection** entry
(she's used it and lived with it) or a **radar** entry (new/testing, promising, worth
watching)? Radar entries: `status: radar`, NO scores, and the note is one short
"Why I'm watching" paragraph — her first impressions plus the open question she's
waiting to answer. Everything below about distilling and sign-off applies to both.

Input: product name, URL, and the editor's spoken/written telling of her experience
(often Chinese, often unstructured — that's expected). Possibly platform/pricing info.
Output: one file at `src/content/products/<slug>.md` + a local preview for sign-off.

## Steps

1. **Gather facts**: fill in whatever the editor didn't provide (platform, pricing,
   category, tagline material) from the product's official site. If something can't be
   verified, ask — never guess.
2. **Distill the editor's notes (most important)**:
   - `review` field = 2–4 English paragraphs distilled from her telling. Organize and
     tighten, keep her angle and specifics (the anecdotes, the resistance-then-conversion,
     the PM observations). **Every point must come from her** — no invented opinions,
     no generic praise. Tone: first-person appreciation, never a verdict from above.
   - **Write for the reader, not the transcript.** Her telling's order is raw material,
     not the structure: readers scan, so the first sentence of the notes — and of every
     paragraph — must carry its sharpest claim. Discovery backstory ("friends kept
     recommending it") never opens the notes; compress it into a supporting clause or
     drop it. If a reader stops after two lines, they should already have the point.
   - `verdict` field = one short line (~12 words) capturing her sharpest point,
     phrased personally ("It won me over before the onboarding ended")
   - `highlight` field = the single most essential passage **selected** from the notes
     (2–3 sentences max, the distilled core of why this product matters — not the
     backstory). Shown large in the homepage "Latest addition" block. Light trimming
     for standalone reading is fine; no new claims.
   - `scores` field = propose craft / originality / tech (1–5) based on what she
     emphasized, and ask her to confirm or adjust
   - Show her the distilled version and get sign-off before finishing
3. **Tags and visuals**: add 2–3 lowercase need-oriented `tags` (what a visitor scans
   for: "meetings", "writing", "kids"). Run `scripts/fetch-og-image.sh <slug> <url>`
   to download the product's og:image and set the printed path as `image` (leave unset
   if the site has none). Run `scripts/fetch-favicon.sh <slug> <url>` and set the
   printed path as `favicon`.
4. **Write the "At a glance" body**: three fixed sections — `## What it does`,
   `## Details worth noting`, `## Who it's for`. Verifiable, objective statements only;
   no evaluative adjectives.
5. **Create the file**: slug = lowercase product name (hyphenated). Frontmatter schema
   is in `src/content.config.ts`. `date` = today.
6. **Draft the social post**: write `social/<slug>.md` with two drafts sharing the same
   substance —
   - an English X post: open with the verdict (or the notes' sharpest line), 2–3
     short lines on what the editor appreciates, end with the entry's URL
   - a Chinese 小红书 post: same substance, natural Chinese, not a literal translation
   Both quote or paraphrase only the editor's notes — no invented praise. These are
   drafts for the editor to edit and post herself; never post anywhere on her behalf.
7. **Preview and confirm**: start the dev server, check both the index row and the
   detail page render correctly, and get the editor's sign-off before calling it done.

## Red lines

- Never put a point in the editor's notes that she didn't actually make. Distill, don't
  invent. She signs off before anything is final.
- No tribunal language anywhere ("earns its place", "deserves", "qualifies"). The voice
  is a fan taking notes, not a judge.
- No judgment words in "At a glance" (great / stunning / recommended). The personal
  perspective lives only in the editor's notes.
- Never invent product facts. Leave blank and ask.
- Everything on the site is in English (default language); the editor may provide her
  review in Chinese — if so, ask whether she wants to translate it herself or have a
  draft translation to approve line by line. Never publish a translation she hasn't
  approved.
