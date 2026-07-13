import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const products = (await getCollection('products')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'Grain',
    description:
      "A personal collection of AI products that get something right — used, appreciated, and written up in the editor's own words. No paid placements.",
    site: context.site!,
    items: products.map((p) => ({
      title: `${p.data.status === 'radar' ? 'On the radar: ' : ''}${p.data.name} — ${p.data.tagline}`,
      link: `/p/${p.id}/`,
      pubDate: p.data.date,
      description: `“${p.data.verdict}”\n\n${p.data.review.join('\n\n')}`,
    })),
  });
}
