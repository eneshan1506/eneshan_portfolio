export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hanenes.com';
  const locales = ['de', 'tr', 'en'];
  const routes = ['', '/impressum', '/datenschutz'];

  const sitemapEntries = [];

  for (const route of routes) {
    for (const locale of locales) {
      const isHome = route === '';
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: isHome ? 'weekly' : 'monthly',
        priority: isHome ? (locale === 'de' ? 1.0 : 0.9) : 0.5,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${route}`])
          ),
        },
      });
    }
  }

  return sitemapEntries;
}
