import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const productSchema = z.object({
  // 'collection' = used and lived with, full notes + scores.
  // 'radar' = newly launched / still testing; promising direction, worth watching.
  //   No scores, and the note is first impressions only.
  status: z.enum(['collection', 'radar']).default('collection'),
  name: z.string(),
  url: z.string().url(),
  tagline: z.string(),
  category: z.string(),
  // Need-oriented tags so visitors can scan for what helps them (e.g. "meetings", "writing")
  tags: z.array(z.string()).default([]),
  // Product visual, fetched via scripts/fetch-og-image.sh — path under /images/products/
  image: z.string().optional(),
  // Product favicon, fetched via scripts/fetch-favicon.sh — path under /images/favicons/
  favicon: z.string().optional(),
  platform: z.array(z.string()),
  pricing: z.string(),
  // Hand-picked related entries (slugs) shown as "You might also appreciate"
  related: z.array(z.string()).default([]),
  // Used for ordering and RSS only — not displayed anywhere
  date: z.coerce.date(),
  // When the product publicly launched (display string, e.g. "May 2024") — verified, not guessed
  launched: z.string().optional(),
  // One-line takeaway shown on the index page
  verdict: z.string(),
  // "Editor's notes" on the detail page — distilled from the editor's own telling
  review: z.array(z.string()),
  // The single most essential excerpt from the notes (selected, not written)
  highlight: z.string().optional(),
  // Editorial pull quote — the strongest product insight, shown large inside the notes
  pull: z.string().optional(),
  // Where the product shines, 1-5 per dimension. Not a ranking between products —
  // a profile of where this one is strong.
  scores: z
    .object({
      craft: z.number().min(1).max(5),
      originality: z.number().min(1).max(5),
      tech: z.number().min(1).max(5),
    })
    .optional(),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: productSchema,
});

const products_zh = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products_zh' }),
  schema: productSchema,
});

const products_ja = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products_ja' }),
  schema: productSchema,
});

export const collections = { products, products_zh, products_ja };
