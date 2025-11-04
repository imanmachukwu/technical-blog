import { createClient } from '@/prismicio';

export default function generateSiteMap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://technical.imanmachukwu.com</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>1.0</priority>
     </url>
     ${pages.map(page => `
       <url>
         <loc>https://technical.imanmachukwu.com/${page.uid}</loc>
         <lastmod>${page.last_publication_date}</lastmod>
         <changefreq>weekly</changefreq>
         <priority>0.7</priority>
       </url>
     `).join('')}
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
  const client = createClient();
  const pages = await client.getAllByType('page');

  const sitemap = generateSiteMap(pages);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
