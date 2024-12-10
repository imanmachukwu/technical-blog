export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      //disallow: '/private/',
    },
    sitemap: 'https://imanma.xyz/sitemap.xml',
  }
}