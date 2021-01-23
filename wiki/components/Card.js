import styles from '../styles/card.module.scss'

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.phrase}>
        <p className={styles.text}>
          asdasdasd
        </p>
      </div>
      <div className={styles.translate}>
        <p className={styles.text}>
          asdasdasd
        </p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button}>asd</button>
        <button className={styles.button}>asd</button>
      </div>
    </div>
  )
}
