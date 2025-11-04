import "@/styles/globals.css";
import { PrismicPreview } from '@prismicio/next';
import { Analytics } from '@vercel/analytics/react';
import { useState } from 'react';

function App({ Component, pageProps }) {
  const [navigation, setNavigation] = useState(null);
  const [error, setError] = useState(null);

  return (
    <PrismicPreview repositoryName="imanma">
      <Component {...pageProps} />
      <Analytics />
    </PrismicPreview>
  );
}

export default App;
