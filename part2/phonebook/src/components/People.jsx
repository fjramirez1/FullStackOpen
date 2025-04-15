import Person from './Person'

const People = ({ people, newFilter}) => {
    return(
        <div>
        {people
          .filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
          .map(person => 
            <Person key={person.id} person={person} />
          )}
      </div>
    )
}

export default People