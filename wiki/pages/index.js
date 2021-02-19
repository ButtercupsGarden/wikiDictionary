import styles from '../styles/Index.module.scss'
import {useState, useEffect} from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router'

export default function Home({data}) {
  const [phrases, setPhrases] = useState(null)
  const [currentPhrase, setCurrentPhrases] = useState(null)
  const [next, setNext] = useState(0)

  useEffect(() => {
    setPhrases(() => data)
    setCurrentPhrases(()=> data[next])
  }, [data])

  useEffect(()=>{
    if(next === data.length-1){
      setNext(0)
    }
    setCurrentPhrases(()=> data[next])
    console.log(currentPhrase)
  },[next])


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
    <Header title={'Учим английский'}>
      <div className={styles.main}>
        <div className={styles.sideBar}>
          <div onClick={() => Router.push('/add')}>
            <FontAwesomeIcon className={styles.add} icon={faPlus} size='4x'/>
          </div>
        </div>
        <div className={styles.title}>
          <Card phrase={currentPhrase} next={() => setNext(next + 1)}/>
        </div>
      </div>
    </Header>
  )
}

export async function getServerSideProps() {
  const {getAllPhrases,shuffle} = require('../util/util')

  const data = shuffle(getAllPhrases())

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
    },
  }
}
