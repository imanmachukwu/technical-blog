import "@/styles/globals.css";
import { useState, useEffect } from 'react';
import { createClient, repositoryName, linkResolver } from '../prismicio'; // Adjust path as needed
import { PrismicNextLink, PrismicRichText } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';

function App({ Component, pageProps, navigation }) {
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
              {slice?.primary?.link && slice?.primary?.label && (
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
      {renderNavigation()}
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </>
  );
}

App.getInitialProps = async ({previewData}) => {
  try {
    const client = createClient({previewData});
    const navigation = await client.getByUID('navigation', 'header');
    console.log("Drawn navigation:", navigation.data.slices);
    return {
      props: { navigation }
    }
  } catch (error) {
    console.error('Error fetching navigation:', error);
    return {
      props: { error: error.message || 'An error occurred while fetching data' }
    }
  }
}

export default App;