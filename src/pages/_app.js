import "@/styles/globals.css";
import { useState, useEffect } from 'react';
import { createClient, repositoryName, linkResolver } from '@/prismicio'; // Adjust path as needed
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextLink, PrismicPreview } from '@prismicio/next';

function App({ Component, pageProps }) {
  const [navigation, setNavigation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNavigation = async () => {
      try {
        const response = await fetch('/api/navigation'); // Call the API route
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setNavigation(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchNavigation();
  }, []);

  return (
    <>
      <nav>
          <ul>
            {navigation?.data?.slices?.map((slice, index) => (
              <li key={index}>
                {slice?.primary?.link && slice?.primary?.label && (
                  <PrismicNextLink field={slice.primary.link} linkResolver={linkResolver} >
                    <PrismicRichText field={slice.primary.label} />
                  </PrismicNextLink>
                )}
              </li>
            ))}
          </ul>
      </nav>
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </>
  );
}

export default App;