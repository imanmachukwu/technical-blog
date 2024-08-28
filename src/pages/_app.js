import "@/styles/globals.css";
import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import { createClient, repositoryName, linkResolver } from '@/prismicio';
import { PrismicNextLink, PrismicRichText } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { GeistSans } from "geist/font/sans";

function App({ Component, pageProps, navigation, preloader }) {
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const preloaderLoaded = () => {
    setLoading(false);
  }

  const renderNavigation = () => {
    if (!isClient) return null;

    return (
      <nav>
        <ul>
          {navigation?.data?.slices?.map((slice) => (
            <li key={slice.id}>
              {slice.primary?.link && slice.primary?.label && (
                <PrismicNextLink field={slice.primary.link} linkResolver={linkResolver}>
                  <PrismicRichText field={slice.primary.label} />
                </PrismicNextLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <>
      {loading ? (
        <Preloader page={preloader} onLoadComplete={preloaderLoaded} />
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