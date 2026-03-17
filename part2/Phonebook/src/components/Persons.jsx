const Persons = ({filtered, onClick}) => {
  return (
    filtered.map(person => 
    <div>
      {person.name} {person.number} 
      <button onClick={()=>onClick(person.name, person.id)}>delete</button>
    </div>
    ))
}

export default Persons