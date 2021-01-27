import React,{useState} from 'react'
import styles from '../styles/card.module.scss'
import {ButtonApp} from './button/ButtonApp'

export default function Card({phrase, next}) {
  const [translate, setTranslate] = useState(false)
  const changeVisible = () => {
    setTranslate(!translate)
  }
  const nextPhrase = () => {
    setTranslate(false)
    next()
  }

  return (
      <div className={styles.card}>
        <div className={styles.phrase}>
          {phrase.phrase}
        </div>
        <div className={translate? styles.translate +" "+ styles.active: styles.translate}>
            {phrase.translate}
        </div>
        <div className={styles.buttons}>
          <ButtonApp onClick={changeVisible} buttonStyle='btn-app--primary--solid' buttonSize='btn-app--small'>Перевести</ButtonApp>
          <ButtonApp onClick={nextPhrase} buttonStyle='btn-app--primary--solid' buttonSize='btn-app--small'>Далее</ButtonApp>
        </div>
      </div>
  )
}
