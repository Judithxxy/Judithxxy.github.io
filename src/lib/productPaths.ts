import { getCollection } from 'astro:content';
import type { collectionFor } from '../i18n';

type ProductCollection = (typeof collectionFor)[keyof typeof collectionFor];

// Shared getStaticPaths logic for product pages across locales.
// Only collection entries join the prev/next walk; radar entries stand alone.
export async function buildProductPaths(collection: ProductCollection) {
  const all = (await getCollection(collection)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const walk = all.filter((p) => p.data.status === 'collection');

  return all.map((p) => {
    const i = walk.findIndex((w) => w.id === p.id);
    const inWalk = i !== -1;
    return {
      params: { id: p.id },
      props: {
        product: p,
        prev: inWalk && i > 0 ? { id: walk[i - 1].id, name: walk[i - 1].data.name } : null,
        next:
          inWalk && i < walk.length - 1
            ? { id: walk[i + 1].id, name: walk[i + 1].data.name }
            : null,
        related: p.data.related
          .map((id) => all.find((e) => e.id === id))
          .filter((e): e is NonNullable<typeof e> => Boolean(e)),
      },
    };
  });
}
