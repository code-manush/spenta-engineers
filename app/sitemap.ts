import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.spentaengineers.com';

  // Static routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/catalogue',
    '/industries',
    '/manufacturing-quality',
    '/products',
    '/products/core-drilling-system',
    '/products/core-drilling-system/drill-rods',
    '/products/core-drilling-system/core-barrels',
    '/products/core-drilling-system/head-assembly',
    '/products/core-drilling-system/overshot',
    '/products/core-drilling-system/locking-coupling',
    '/products/core-drilling-system/adapter-coupling',
    '/products/core-trays',
    '/products/diamond-tungsten-tools',
    '/products/drill-rigs',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly' as const,
    priority: route === '' ? 1 : route.startsWith('/products') ? 0.8 : 0.7,
  }));
}

