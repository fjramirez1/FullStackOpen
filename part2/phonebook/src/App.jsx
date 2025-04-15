import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '123456' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      phone: newPhone
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

  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map((person) => (
          <span key={person.phone}>
            {person.name} {person.phone}
            <br />
          </span>
        ))}
      </div>
    </div>
  )
}

export default App