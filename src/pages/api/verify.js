import cookie from 'cookie';
import { verify } from 'jsonwebtoken';

export default function handler(req, res) {
  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies.auth;

  if (!token) {
    return res.status(401).json({ authenticated: false });
  }

  try {
    verify(token, process.env.JWT_SECRET);
    return res.status(200).json({ authenticated: true });
  } catch {
    return res.status(401).json({ authenticated: false });
  }
}
