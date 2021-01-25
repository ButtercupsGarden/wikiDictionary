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
  const [next, setNext] = useState(0)

  useEffect(() => {
    let asd = getRandomIntInclusive(0,data.length-1)
      setPhrases(data[asd])
  }, [data, next])


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
          </div>
          <div className={styles.title}>
          </div>

          <div className={styles.frazaEng}>{phrases.phrase}</div>
          <div className={styles.frazaRus}>{phrases.translate}</div>


          <div className={styles.buttons} >
            <div className={styles.next} onClick={()=>setNext(next + 1)}>next</div>
            <div className={styles.perevod}>perevod</div>
          </div>


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
