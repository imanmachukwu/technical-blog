export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // disallow: '/private/',
      },
    ],
    sitemap: 'https://technical.imanmachukwu.com/sitemap.xml',
  };
}

export async function getServerSideProps({ res }) {
  const robotsTxt = `User-agent: *
  Allow: /
  # Disallow: /private/
  Sitemap: https://technical.imanmachukwu.com/sitemap.xml`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
}
