import "@/styles/globals.css";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { createClient, repositoryName, linkResolver } from '@/prismicio'; // Adjust path as needed
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextLink, PrismicPreview } from '@prismicio/next';
import PlausibleProvider from 'next-plausible'

function App({ Component, pageProps }) {
  const [navigation, setNavigation] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

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

  if (error) {
    return (
      <nav>
        <p>Error fetching content. Please refetch.</p>
      </nav>
    )
  }

  return (
    <>
      <nav>
          <ul>
            {navigation?.data?.slices?.map((slice, index) => (
              <li key={index}>
                {slice?.primary?.link && slice?.primary?.label && (
                  <PrismicNextLink field={slice.primary.link} linkResolver={linkResolver} className={router.asPath === slice.primary.link.url ? 'selected' : ''}>
                    <PrismicRichText field={slice.primary.label} />
                  </PrismicNextLink>
                )}
              </li>
            ))}
          </ul>
      </nav>
      <PrismicPreview repositoryName="imanma">
        <PlausibleProvider domain="imanma.xyz">
          <Component {...pageProps} />
        </PlausibleProvider>
      </PrismicPreview>
    </>
  );
}

export default App;