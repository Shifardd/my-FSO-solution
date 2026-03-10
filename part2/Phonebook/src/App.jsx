import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    let namesListed = persons.map(person => person.name)
    
    let nameToBeAdded = {
      name: newName
    }
    // console.log(nameToBeAdded.name);
    
    if (namesListed.includes(nameToBeAdded.name)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(nameToBeAdded))
      setNewName('')
    }
    // console.log('button clicked ',event.target);
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
    // console.log(event.target.value);
  }
  
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => <div key={person.name}>{person.name}</div>)
      }

    </div>
  )
}

export default App