
export default async function sitemap() {
  const baseUrl = "https://marahel.ai";
  const locales = ["ar", "en"];

  const pages = ["", "contact_us"];

  const sitemapEntries = locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page ? `/${page}` : ""}`,
      lastModified: new Date(),
    }))
  );

  return sitemapEntries;
}
