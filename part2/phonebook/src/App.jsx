import { useState, useEffect } from 'react'
import People from './components/People'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [people, setPeople] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
          .getAll()
          .then(initialPeople => {
            setPeople(initialPeople)
          })
  }, [])

  const removePerson = (id) => {
    const person = people.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPeople(people.filter(p => p.id !== id))
        })
        .catch(error => {
          alert(`Information of ${person.name} has already been removed from server`)
          setPeople(people.filter(p => p.id !== id))
        })
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber
    }
    
    const personExists = people.some(p => p.name === person.name)
    if (personExists) {
      if (window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)) {
        const existingPerson = people.find(p => p.name === person.name)
        const updatedPerson = { ...existingPerson, number: person.number }
        
        personService
          .update(existingPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPeople(people.map(p => p.id !== existingPerson.id ? p : returnedPerson))
          })
      }
    } else {
      personService
          .create(person)
          .then(returnedPerson => {
            setPeople(people.concat(returnedPerson))
          })
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={newFilter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <People
        people={people}
        newFilter={newFilter}
        removePerson={removePerson}
      />
    </div>
  )
}

export default App