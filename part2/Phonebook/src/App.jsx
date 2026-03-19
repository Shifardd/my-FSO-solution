import { useState, useEffect } from "react";
import Filter from './components/Filter'
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import personService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('You can add phonebook at the form below...')

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
      let confirmIt = confirm(`${newName} is already added to phonebook, replace the old number to a new one?`)

      if(confirmIt) {
        let findThePerson = persons.find(person => person.name == newName)
        
        personService.update(findThePerson.id, personToBeAdded)
        .then(returnedPersons => {
          setPersons(persons.map(person => person.id == findThePerson.id ? returnedPersons : person))
        })
      }
    } else {
      personService.create(personToBeAdded)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewPhone('')

        setMessage(
          `Added ${returnedPerson.name}`
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000);
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


  const deletePerson = (name, id) => {
    let confirmation = confirm(`Delete ${name}`)
    if(confirmation) {
      personService.remove(id)
      .then(removedPerson => {
        setPersons(persons.filter(p => p.id !== removedPerson.id))
      })
    } else {
      alert('Deletion cancelled');
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter value={search} onChange={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm onSubmit={addPerson} name={newName} handleName={handleNewName} number={newPhone} handleNumber={handleNewPhone} />
      <h2>Numbers</h2>
      <Persons key={persons.id} filtered={showFiltered} onClick={deletePerson} />
    </div>
  )
}

export default App