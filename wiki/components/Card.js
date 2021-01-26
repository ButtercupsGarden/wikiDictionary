import React,{useState} from 'react'
import styles from '../styles/card.module.scss'
import {Button} from './button/Button'

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
          <Button onClick={changeVisible} buttonStyle='btn--primary--solid' buttonSize='btn--small'>Перевести</Button>
          <Button onClick={nextPhrase} buttonStyle='btn--primary--solid' buttonSize='btn--small'>Далее</Button>
        </div>
      </div>
  )
}
