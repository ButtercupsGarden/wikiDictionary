import styles from '../styles/pageError.module.scss'
import Link from 'next/link'

export default function PageError() {
  return (
    <div className={styles.error}>
      <div className={styles.title}>
        <h1>
          Страница не найдена
        </h1>
      </div>
      <div className={styles.title}>
        <Link href="/">
          <h1>
            На главную
          </h1>
        </Link>
      </div>
    </div>
  )
}
