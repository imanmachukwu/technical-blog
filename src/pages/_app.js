import "@/styles/globals.css";
import { useState, useEffect } from 'react';
import { createClient, repositoryName, linkResolver } from '../prismicio'; // Adjust path as needed
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';

function App({ Component, pageProps, navigation, error }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
      {renderNavigation()}
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient();
  let navigation = null;

  try {
    navigation = await client.getByUID('navigation', 'header');
  } catch (error) {
    console.error('Error fetching navigation:', error);
  }

  return {
    props: {
      navigation,
    },
    revalidate: 60 * 60, // Revalidate every hour
  };
}

export default App;