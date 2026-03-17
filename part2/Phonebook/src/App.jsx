import { useState, useEffect } from "react";
import Filter from './components/Filter'
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    personService.getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    let namesListed = persons.map(person => person.name)
    
    let personToBeAdded = {
      name: newName,
      number: newPhone,
      id: String(persons.length + 1)
    }
    // console.log(personToBeAdded.name);
    
    if (namesListed.includes(personToBeAdded.name)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      personService.create(personToBeAdded)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewPhone('')
      })

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
  
  const handleSearch = (event) => {
    // console.log(event.target.value);
    let searchText = event.target.value
    setSearch(searchText)
  }

  const showFiltered = search ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase())) : persons
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={search} onChange={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm onSubmit={addPerson} name={newName} handleName={handleNewName} number={newPhone} handleNumber={handleNewPhone} />
      <h2>Numbers</h2>
      <Persons filtered={showFiltered}  />
    </div>
  )
}

export default App