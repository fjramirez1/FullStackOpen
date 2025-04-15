import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: newName
    }
    const personExists = persons.some(p => p.name === person.name)
    if (personExists) {
      alert(`${person.name} is already added to phonebook`)
      return
    }
    setPersons(persons.concat(person))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person, index) => (
          <span key={person.name}>
            {person.name}
            <br />
          </span>
  ))}
      </div>
    </div>
  )
}

export default App