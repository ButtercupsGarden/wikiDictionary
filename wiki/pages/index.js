import styles from '../styles/Index.module.scss'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <div className={styles.main}>
          <div className={styles.title}>
            TEST
          </div>
          <div className={styles.title}>
            TEST
          </div>
        </div>
      </main>

    </div>
  )
}
