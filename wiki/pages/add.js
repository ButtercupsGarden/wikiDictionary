import {Button} from '../components/Button'

export default function Add() {
  return (
    <div>
      <div>
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
      <div>
        <input type="text"/>
        <input type="text"/>
      </div>
      <div>
        <label htmlFor="active">active</label>
        <input type="checkbox" name="active" id="active"/>
      </div>
      <div>
        <Button className={'asd'}>Сохранить</Button>
      </div>
    </div>
  )
}
