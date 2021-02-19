import styles from './list.module.scss'


export default function List({data}) {
  return (
    <div>
      <ul className={styles.list}>
        {data && data.map((el)=>(
          <li className={styles.phlist} key={el.id}>{`id: ${el.id} || ${el.phrase}`}</li>)
        )}
      </ul>
    </div>
  )
}
