import { useState } from 'react'
import data from './data'
import Person from './Person.jsx'
import List from './List.jsx'
const App = () => {
  const [people, setPeople] = useState(data)
  const removeSinglePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople((currentState) => {
      return newPeople
    })
  }
  const removeAllPerson = () => {
    setPeople((currentState) => {
      return []
    })
  }
  return (
    <>
      <h2>Birthday Reminder</h2>
      <h3>{people.length} BirthDays Today</h3>
      <List people={people} removeSinglePerson={removeSinglePerson} />
      {/* <ul>
      {people.map((person) => {
        // const { name, image, age, id } = person
        return (
        <Person {...person} removeSinglePerson={removeSinglePerson} key ={person.id}> </Person> 
        )
      })}
      </ul> */}
      <button type="button" onClick={removeAllPerson} className="btn">
        Clear the list
      </button>
    </>
  )
}
export default App
