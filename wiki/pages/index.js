import styles from '../styles/Index.module.scss'
import Head from 'next/head'
import {useState, useEffect} from 'react'

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default function Home({data}) {
  const [phrases, setPhrases] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhrases(data)
    }, 2000)
  }, [data])


  if (!phrases) {
    return (
      <div className={styles.main}>
        <div className={styles.ldsRoller}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <Head>
        <title>Учим английский по разговорным фразам</title>
      </Head>

      <main>
        <div className={styles.main}>
          <div className={styles.title}>
            {/*{phrases && phrases.map((phrase) =>*/}
            {/*  <div key={phrase.id}>{phrase.phrase}</div>*/}
            {/*)}*/}
          </div>
          <div className={styles.title}>
          </div>
          <div className={styles.frazaRus}>frazaRus</div>
          <div className={styles.frazaEng}>frazaEng</div>
          <div className={styles.next}>next</div>
          <div className={styles.perevod}>perevod</div>

        </div>
      </main>

    </div>
  )
}

export async function getServerSideProps(context) {
  // console.log(context)
  const {getAllPhrases} = require('../util/util')

  const data = getAllPhrases()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data
    },
  }
}
