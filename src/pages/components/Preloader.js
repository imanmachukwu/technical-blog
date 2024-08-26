import styles from '@/styles/Preloader.module.css';
import { PrismicNextImage } from '@prismicio/next'

const Preloader = ({ page }) => {
  return (
    <div className={styles.preloader}>
      <div className={styles.image__container}>
        <PrismicNextImage
          className={styles.image}
          field={page?.data?.image ?? null}
          loader={undefined}
          fallback={<p className={styles.image__fallback}>Image could not load.</p>}
        />
      </div>
    </div>
  )
}

export default Preloader;