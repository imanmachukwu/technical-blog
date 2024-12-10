export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // disallow: '/private/',
      },
    ],
    sitemap: 'https://imanma.xyz/sitemap.xml',
  };
}

export async function getServerSideProps({ res }) {
  const robotsTxt = `User-agent: *
  Allow: /
  # Disallow: /private/
  Sitemap: https://imanma.xyz/sitemap.xml`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
}