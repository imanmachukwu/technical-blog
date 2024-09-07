import styles from '@/styles/404.module.css'
import Link from 'next/link'

export default function Custom404() {
    return <main>
        <h1 className={styles.title_code}>404</h1>
        <p className={styles.text_code}>Page Not Found</p>
        <Link href='/' className={styles.link_code}>Go to Index</Link>
    </main>
}