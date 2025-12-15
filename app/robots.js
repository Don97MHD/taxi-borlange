export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'], // Add any paths you want to disallow
    },
    sitemap: 'https://taxi-borlange.vercel.app/sitemap.xml',
  };
}