export default function Sitemap(){
    return [
      {
        url: 'https://imanma.xyz',
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 1.0,
      },
      {
        url: 'https://imanma.xyz/colophon',
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://imanma.xyz/work',
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    ];
  }