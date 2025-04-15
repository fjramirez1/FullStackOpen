import { useState } from 'react'
import People from './components/People'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [people, setPeople] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      phone: newPhone,
      id: people.length + 1
    }
    console.log(person)
    const personExists = people.some(p => p.name === person.name)
    if (personExists) {
      alert(`${person.name} is already added to phonebook`)
      return
    }
    setPeople(people.concat(person))
    setNewName('')
    setNewPhone('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
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
        newPhone={newPhone} // ✅
        handlePhoneChange={handlePhoneChange} // ✅
      />

      <h2>Numbers</h2>
      <People people={people} newFilter={newFilter} />
    </div>
  )
}

export default App