import styles from "@/styles/Error.module.css";
import { useEffect } from "react";

const Error = () => {
    useEffect(() => {
        function setIndentation() {
          if (window.innerWidth <= 768) return;
          const words = document.querySelectorAll(`.${styles.text}`);
          let prevWidth = 0;
          let prevLeft = 0;
          words.forEach((word, index) => {
            if (index === 0) {
              word.style.left = '0px';
            } else {
              const indent = prevLeft + prevWidth;
              word.style.left = `${indent}px`;
            }
            prevWidth = word.offsetWidth;
            prevLeft = parseFloat(word.style.left) || 0;
          });
        }
    
        setIndentation();
        window.addEventListener('resize', setIndentation);
    
        return () => {
          window.removeEventListener('resize', setIndentation);
        };
      }, []);

    return (
        <main>
            <span className={styles.text}>Error</span>
            <span className={styles.text}>Error</span>
            <span className={styles.text}>Error</span>
            <span className={styles.text}>Retry</span>
        </main>
    )
}

export default Error;