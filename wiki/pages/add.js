import {ButtonApp} from '../components/button/ButtonApp'
import styles from '../styles/add.module.scss'
import {useState, useEffect} from 'react'
import {Form} from 'react-bootstrap'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Router from 'next/router'
import Header from '../components/Header'
import List from '../components/list/List'
const {addPhrase} = require('../util/util')

export default function Add({data}) {
  const [search, setSearch] = useState('')
  const [allPhrases, setPhrases] = useState(data)

  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [ch, setCh] = useState(false)


  useEffect(() => {
    if (search != '') {
      // dodelat poisk sovpadenie
      setPhrases(data.filter((el) => el.phrase == search))
    } else {
      setPhrases(data)
    }
  }, [search])

  const save = () => {
    let obj = {}
    obj.id = 10
    obj.phrase = text1
    obj.translate = text2
    obj.active = ch
    addPhrase(text1,text2,ch)
    console.log(obj)
  }

  return (
    <Header title={'Панель администрирования'}>
      <FontAwesomeIcon
        className={styles.arrowLeft}
        icon={faArrowLeft}
        size='4x'
        onClick={() => Router.push('/')}
      />
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <Form.Group controlId="сontrolInputSearch">
            <Form.Control
              type="text"
              placeholder="введите текст"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form.Group>
          <List data={allPhrases}></List>
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
