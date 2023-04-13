import data from './data'
import Person from './Person'
const List = ({ removeSinglePerson, people }) => {
  return (
    <div>
      <ul>
        {people.map((person) => {
          // const { name, image, age, id } = person
          return (
            <Person
              {...person}
              removeSinglePerson={removeSinglePerson}
              key={person.id}
            />
          )
        })}
      </ul>
    </div>
  )
}
export default List
