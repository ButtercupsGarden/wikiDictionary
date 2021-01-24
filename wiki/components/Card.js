import React,{useState} from 'react'
import styles from '../styles/card.module.scss'

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
          <div className={styles.button} onClick={changeVisible}>Перевести</div>
          <div className={styles.button} onClick={nextPhrase}>Далее</div>
        </div>
      </div>
  )
}
