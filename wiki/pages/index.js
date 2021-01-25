import styles from '../styles/Index.module.scss'
import {useState, useEffect} from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router'

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default function Home({data}) {
  const [currentPhrase, setCurrentPhrase] = useState(null)
  const [next, setNext] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      let id = getRandomIntInclusive(0, data.length - 1)
      console.log(data[id])
      setCurrentPhrase(data[id])
    }, 0)
  }, [data, next])


  if (!currentPhrase) {
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
  const {getAllPhrases} = require('../util/util')

  const data = getAllPhrases()

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
