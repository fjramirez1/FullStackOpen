import Person from './Person'

const People = ({ people, newFilter, removePerson}) => {
    return(
        <div>
        {people
          .filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
          .map(person => 
            <Person
              key={person.id}
              person={person} 
              removePerson={() => removePerson(person.id)}
            />
          )}
      </div>
    )
}

export default People