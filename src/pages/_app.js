import "@/styles/globals.css";
import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import { createClient, repositoryName } from '@/prismicio';
import { PrismicNextLink, PrismicRichText } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';

function App({ Component, pageProps, navigation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <nav>
            <ul>
              {navigation && navigation.data.slices.map((slice) => (
                <li key={slice.id}>
                  <PrismicNextLink field={slice.primary.link}>
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

  try {
    navigation = await client.getByUID('navigation', 'header');
    console.log('Navigation fetched successfully:', navigation);
  } catch (error) {
    console.error('Error fetching navigation:', error);
    try {
      navigation = await client.getSingle('navigation');
      console.log('Navigation fetched as single type:', navigation);
    } catch (innerError) {
      console.error('Error fetching navigation as single type:', innerError);
    }
  }

  const pageProps = appContext.Component.getInitialProps
    ? await appContext.Component.getInitialProps(appContext.ctx)
    : {};

  return { pageProps, navigation };
};

export default App;