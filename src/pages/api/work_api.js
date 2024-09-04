import { createClient } from '@/prismicio';

export default async function handler(req, res) {
    const { type, uid } = req.query;

    if (!type || !uid) {
        return res.status(400).json({ error: 'Type and UID are required' });
    }

    try {
      const client = createClient();
      const nav = await client.getByUID(type, uid, {
        fetchLinks: ['title', 'featured_image', 'type', 'ratio', 'media']
      })
      res.status(200).json(nav);
    } catch (error) {
      console.error('Error fetching navigation:', error);
      res.status(500).json({ error: 'Failed to fetch navigation data' });
    }
}