import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const products = (await getCollection('products')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'Actually Good',
    description:
      'A hand-picked collection of AI products that get something right. Every entry is in real use, with notes on what makes it special. No paid placements.',
    site: context.site!,
    customData: '<language>en</language>',
    items: products.map((p) => ({
      title: `${p.data.status === 'radar' ? 'New: ' : ''}${p.data.name} — ${p.data.tagline}`,
      link: `/p/${p.id}/`,
      pubDate: p.data.date,
      description: `“${p.data.verdict}”\n\n${p.data.review.join('\n\n')}`,
    })),
  });
}
