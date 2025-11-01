import "@/styles/globals.css";
import { PrismicPreview } from '@prismicio/next';
import { Analytics } from '@vercel/analytics/react';
import Head from "next/head";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PasswordGate = ({ children }) => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/auth/verify')
      .then(res => res.json())
      .then(data => {
        setAuthenticated(data.authenticated);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    });

    if (response.ok) {
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (loading) return null;
  if (authenticated) return children;

  return (
    <>
      <Head>
        <title>My private blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}>
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          minWidth: '300px'
        }}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            style={{
              padding: '0.75rem 1.5rem',
              border: '1px solid #ddd',
              color: 'black',
              borderRadius: '24px',
              fontSize: '1rem',
              backgroundColor: 'whitesmoke'
            }}
          />
          <button type="submit" style={{
            padding: '0.75rem',
            backgroundColor: '#212529',
            color: 'whitesmoke',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}>Submit</button>
          {error && <p style={{ color: 'red', margin: 0, textAlign: 'center', fontSize: '1rem' }}>Incorrect password</p>}
        </form>
      </div>
    </>
  );
};

function App({ Component, pageProps }) {
  const [navigation, setNavigation] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  return (
    <PasswordGate>
      <PrismicPreview repositoryName="imanma">
        <Component {...pageProps} />
        <Analytics />
      </PrismicPreview>
    </PasswordGate>
  );
}

export default App;
