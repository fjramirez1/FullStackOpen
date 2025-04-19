const Person = ({ person, removePerson }) => {
  return (
    <div>
      {person.name} {person.phone}
      <button onClick={removePerson}>delete</button>
    </div>
  )
}

export default Person