import {ButtonApp} from '../components/button/ButtonApp'
import styles from '../styles/add.module.scss'
import {useState, useEffect} from 'react'
import {Input} from '../components/input/Input'
import {Form} from 'react-bootstrap'

export default function Add() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7])
  const [asd, setAsd] = useState(data)

  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [ch, setCh] = useState(false)


  useEffect(() => {
    if (search != '') {
      setAsd(data.filter((el) => el == search))
    } else {
      setAsd(data)
    }
  }, [search])

  const save = () => {
    let obj = {}
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
        <Input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          inputStyle='inp--primary'
          placeholder='Введите текст'
          name='inputSearch'
          inputSize='inp--large'
        />
        <List/>
      </div>
      <div className={styles.form}>
        <div className={styles.formControls}>
          <Form.Group controlId="сontrolInput">
            <Form.Label>Фраза</Form.Label>
            <Form.Control type="text" placeholder="введите текст"/>
          </Form.Group>
          <Form.Group controlId="сontrolTextarea">
            <Form.Label>Перевод</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="введите текст"/>
          </Form.Group>
          <Form.Group controlId="сontrolCheckbox">
            <div className={styles.ch}>
              <Form.Check
                name="active"
                type={'checkbox'}
                id={`active`}
                checked={ch}
                onChange={() => setCh(!ch)}
                label={`Active`}
              />
            </div>
          </Form.Group>
        </div>
        <div className={styles.btnsave}>
          <ButtonApp
            onClick={save}
            type='text'
            buttonSize={'btn--small'}
            buttonStyle='btn--primary--solid'
          >
            Сохранить
          </ButtonApp>
        </div>
      </div>
    </div>
  )
}


