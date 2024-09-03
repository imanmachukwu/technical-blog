import "@/styles/globals.css";
import { useState, useEffect } from 'react';
import { createClient, repositoryName, linkResolver } from '../prismicio'; // Adjust path as needed
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextLink, PrismicPreview } from '@prismicio/next';

function App({ Component, pageProps }) {
  const [navigation, setNavigation] = useState(null);
  console.log("nav not yet fetched")

  useEffect(() => {
    console.log("nav fetching")
    async function fetchNavigation() {
      try {
        const client = createClient();
        const nav = await client.getByUID('navigation', 'header');
        console.log("nav is:", nav)
        setNavigation(nav);
      } catch (error) {
        console.error('Error fetching navigation:', error);
      }
    }
    fetchNavigation();
  }, []);

  return (
    <>
      <nav>
        <ul>
          {navigation?.data?.slices?.map((slice, index) => (
            <li key={index}>
              {slice?.primary?.link && slice?.primary?.label && (
                <PrismicNextLink field={slice.primary.link} linkResolver={linkResolver}>
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