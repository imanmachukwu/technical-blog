import styles from '@/styles/Preloader.module.css';
import { PrismicNextImage } from '@prismicio/next'

const Preloader = ({ page }) => {
  return (
    <div className={styles.preloader}>
      <div className={styles.image__container}>
        <PrismicNextImage
          field={page?.data?.image ?? null}
          loader={undefined}
          fallback={<p>Image could not load.</p>}
        />
      </div>
    </div>
  )
}

export default Preloader;