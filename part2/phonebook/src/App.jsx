import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
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
      id: persons.length + 1
    }
    console.log(person)
    const personExists = persons.some(p => p.name === person.name)
    if (personExists) {
      alert(`${person.name} is already added to phonebook`)
      return
    }
    setPersons(persons.concat(person))
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
      <div>
        filter shown with: 
        <input
          value = {newFilter}
          onChange = {handleFilterChange}
        />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input
            value = {newName}
            onChange = {handleNameChange} 
          />
        </div>
        <div>
          number: 
          <input
            value = {newPhone}
            onChange = {handlePhoneChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons
          .filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
          .map(person => 
            <div key={person.id}>
              {person.name} {person.phone}
            </div>
          )}
      </div>
    </div>
  )
}

export default App