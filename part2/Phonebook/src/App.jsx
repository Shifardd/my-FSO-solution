import { useState } from "react";
import Filter from './components/Filter'
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    let namesListed = persons.map(person => person.name)
    
    let personToBeAdded = {
      name: newName,
      number: newPhone,
      id: persons.length + 1
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