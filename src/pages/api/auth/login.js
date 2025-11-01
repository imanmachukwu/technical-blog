import { serialize } from 'cookie';
import { sign } from 'jsonwebtoken';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { password } = req.body;

  if (password !== process.env.BLOG_PASSWORD) {
    return res.status(401).json({ success: false });
  }

  const token = sign(
    { authenticated: true },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );

  res.setHeader('Set-Cookie', serialize('auth', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 86400,
    path: '/'
  }));

  return res.status(200).json({ success: true });
}
