import { useState, useEffect } from "react";
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data);
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
      axios.post('http://localhost:3001/persons', personToBeAdded)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewPhone('')
      })
      // setPersons(persons.concat(personToBeAdded))
      // setNewName('')
      // setNewPhone('')
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