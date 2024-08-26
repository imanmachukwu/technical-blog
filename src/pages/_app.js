import "@/styles/globals.css";
import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import { createClient, repositoryName } from '@/prismicio';
import { PrismicNextLink, PrismicRichText } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { linkResolver } from '@/prismicio';

function App({ Component, pageProps, navigation, preloader }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page load completion
    const timer = setTimeout(() => setLoading(false), 20000); // Adjust the timing as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader page={preloader} />
      ) : (
        <>
          <nav>
            <ul>
              {navigation && navigation.data.slices.map((slice) => (
                <li key={slice.id}>
                  <PrismicNextLink field={slice.primary.link} linkResolver={linkResolver}>
                    <PrismicRichText field={slice.primary.label} />
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </nav>
          <PrismicPreview repositoryName={repositoryName}>
            <Component {...pageProps} />
          </PrismicPreview>
        </>
      )}
    </>
  );
}

App.getInitialProps = async (appContext) => {
  const client = createClient();
  let navigation = null;
  let preloader = null;

  try {
    // Fetching the navigation data
    navigation = await client.getByUID('navigation', 'header');
    console.log('Navigation fetched successfully:', navigation.data.slices);
  } catch (error) {
    console.error('Error fetching navigation:', error.code);
  }

  try {
    // Fetching the data for the preloader
    preloader = await client.getSingle('preloader');
    console.log('Preloader page fetched successfully:', preloader);
  } catch (error) {
    console.error('Error fetching preloader page:', error.code);
  }

  const pageProps = appContext.Component.getInitialProps
    ? await appContext.Component.getInitialProps(appContext.ctx)
    : {};

  return { pageProps, navigation, preloader };
};

export default App;
