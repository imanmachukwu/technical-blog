import { linkResolver } from '@/prismicio';
import "@/styles/globals.css";
import { PrismicNextLink, PrismicPreview } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function App({ Component, pageProps }) {
  const [navigation, setNavigation] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchNavigation = async () => {
      try {
        const response = await fetch('/api/navigation'); // Call the API route
        const data = await response.json();
        if (!response.ok) {
          console.error(data.error)
          throw new Error(data.error || 'Network response was not ok');
        }
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
        <p>Error fetching menu. Please refetch.</p>
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
          <Component {...pageProps} />
          <Analytics />
      </PrismicPreview>
    </>
  );
}

export default App;
