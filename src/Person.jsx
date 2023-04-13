const Person = ({ name, image, age, id, removeSinglePerson }) => {
  return (
    <li>
      <img src={image} alt={name} style={{ width: '150px' }} />
      <h4>{name}</h4>
      <h5>{age}</h5>
      <button
        type="button"
        onClick={() => removeSinglePerson(id)}
        style={{ marginBottom: '1.5rem' }}
      >
        Remove {name}
      </button>
    </li>
  )
}
export default Person
