import styles from '@/styles/Preloader.module.css';
import { useState, useEffect } from 'react';
import { PrismicNextImage } from '@prismicio/next'

const Preloader = ({ page, onLoadComplete }) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setIsRemoved(true);
        if (onLoadComplete) onLoadComplete();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isLoaded, onLoadComplete]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  if (isRemoved) return null;

  return (
    <div className={styles.preloader}>
      <div className={styles.image__container}>
        <PrismicNextImage
          className={styles.image}
          field={page?.data?.image ?? null}
          priority={true}
          loading="eager"
          onLoad={handleImageLoad}
          fallback={<p className={styles.image__fallback}>Preloader. Hey, please retry that.</p>}
        />
      </div>
    </div>
  )
}

export default Preloader;