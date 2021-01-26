import {Button} from '../components/button/Button'
import styles from '../styles/add.module.scss'
import {useState,useEffect} from 'react'

export default function Add() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7])
  const [asd, setAsd] = useState(data)

  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [ch, setCh] = useState(false)


  useEffect(() => {
    if(search != ''){
      setAsd(data.filter((el)=> el == search))
    }else{
      setAsd(data)
    }
  }, [search])

  const save = () => {
    let obj ={}
    obj.id = 10
    obj.phrase = text1
    obj.translate = text2
    obj.active = ch
    console.log(obj)
  }

  const List = () => {
    return (
      <ul>
        {asd.map((el) =>
          <li key={el}>{el}</li>
        )}
      </ul>
    )
  }

  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <List/>
      </div>
      <div className={styles.inputarea}>
        <input
          type="text"
          value={text1}
          onChange={(e)=> setText1(e.target.value)}
        />
        <input
          type="text"
          value={text2}
          onChange={(e)=>setText2(e.target.value)}
        />
        <div className={styles.asd}>
          <div className={styles.ch}>
            <label htmlFor="active">active</label>
            <input type="checkbox" name="active" id="active" checked={ch} onChange={()=>setCh(!ch)}/>
          </div>
          <div className={styles.btnsave}>
            <Button onClick={save} type='text' buttonSize={'btn--small'} buttonStyle='btn--primary--solid'>Сохранить</Button>
          </div>
        </div>
      </div>
    </div>
  )
}


