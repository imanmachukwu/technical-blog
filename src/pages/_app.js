import "@/styles/globals.css";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { createClient, repositoryName, linkResolver } from '../prismicio'; // Adjust path as needed
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { GeistSans } from "geist/font/sans";

// Dynamically import the Preloader component with SSR disabled
const DynamicPreloader = dynamic(() => import('./components/Preloader'), {
  ssr: false,
});

function App({ Component, pageProps, navigation, preloader }) {
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onLoadComplete = () => {
    setLoading(false);
  };

  const renderNavigation = () => {
    if (!isClient) return null;
    return (
      <nav>
        <ul>
          {navigation?.data?.slices?.map((slice) => (
            <li key={slice.id}>
              {slice.primary?.link && slice.primary?.label && (
                <PrismicLink field={slice.primary.link} linkResolver={linkResolver}>
                  <PrismicRichText field={slice.primary.label} />
                </PrismicLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <>
      {isClient && loading ? (
        <DynamicPreloader page={preloader} onLoadComplete={onLoadComplete} />
      ) : (
        <>
          {renderNavigation()}
          <PrismicPreview repositoryName={repositoryName}>
            <main className={GeistSans.className}>
              <Component {...pageProps} />
            </main>
          </PrismicPreview>
        </>
      )}
    </>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  const client = createClient();
  let navigation = null;
  let preloader = null;
  let pageProps = {};

  try {
    navigation = await client.getByUID('navigation', 'header');
  } catch (error) {
    console.error('Error fetching navigation:', error);
  }

  try {
    preloader = await client.getSingle('preloader');
  } catch (error) {
    console.error('Error fetching preloader page:', error);
  }

  if (Component.getInitialProps) {
    try {
      pageProps = await Component.getInitialProps(ctx);
    } catch (error) {
      console.error('Error in Component.getInitialProps:', error);
    }
  }

  return { pageProps, navigation, preloader };
};

export default App;