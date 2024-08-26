import styles from '@/styles/Preloader.module.css';
import { PrismicNextImage } from '@prismicio/next'

const Preloader = ({ page }) => {
  return (
    <div className={styles.preloader}>
      <div className={styles.image__container}>
      <PrismicNextImage
        field={page?.data?.image ?? null}
        loader={undefined}
        fallback={<p>The field is empty!</p>}
      />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  try {
    const client = createClient()
    const page = await client.getSingle('preloader');
    console.log(page)
    return {
      props: { page },
    }
  } catch (error) {
    console.error('Error fetching data from Prismic:', error);
    return {
      props: { error: error.message },
    }
  }
}

export default Preloader;