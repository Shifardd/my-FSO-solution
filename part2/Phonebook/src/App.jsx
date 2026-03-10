import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      phone: '040-1234567'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    let namesListed = persons.map(person => person.name)
    
    let personToBeAdded = {
      name: newName,
      phone: newPhone
    }
    // console.log(personToBeAdded.name);
    
    if (namesListed.includes(personToBeAdded.name)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personToBeAdded))
      setNewName('')
      setNewPhone('')
    }
    // console.log('button clicked ',event.target);
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
    // console.log(event.target.value);
  }

  const handleNewPhone = (event) => {
    setNewPhone(event.target.value)
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
          number: <input value={newPhone} onChange={handleNewPhone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => <div key={person.name}>{person.name} {person.phone}</div>)
      }

    </div>
  )
}

export default App