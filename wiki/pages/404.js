import styles from '../styles/pageError.module.scss'
import Link from 'next/link'
import Header from '../components/Header'

export default function PageError() {
  return (
    <Header title={'Страница не найдена'}>
      <div className={styles.error}>
        <div className={styles.title}>
          <h1>
            Страница не найдена
          </h1>
        </div>
        <div className={styles.titleRef}>
          <Link href="/">
            <h1>
              На главную
            </h1>
          </Link>
        </div>
      </div>
    </Header>
  )
}
