import { createClient } from '@/prismicio';

export default async function handler(req, res) {
  try {
    const client = createClient();
    const nav = await client.getSingle('navigation');
    res.status(200).json(nav);
  } catch (error) {
    console.error('Error fetching navigation:', error);
    res.status(500).json({ error: 'Failed to fetch navigation data' });
  }
}
