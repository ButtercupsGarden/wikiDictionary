export default function List({data}) {
  console.log(data)
  return (
    <div>
      <ul>
        {data && data.map((el)=>(
          <li key={el.id}>{`id: ${el.id} // ${el.phrase}`}</li>)
        )}
      </ul>
    </div>
  )
}
