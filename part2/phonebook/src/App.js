import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
  ]) 
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const newPerson={ name: newName, number: newNumber }
    const isDuplicate = persons.map((person) => person.name).includes(newName);

    if (isDuplicate) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
    }
    // I have a question, why I could not get an answer with this method below and
    //  it prints the duplicate name and I had to use the above method, 
    // but I want to know if JSON.stringify(person) is the problem?

    // {persons.map(person => 
    //   JSON.stringify(person) === JSON.stringify(newPerson)? alert(`${newName} is already added to phonebook`):   
    // setPersons(persons.concat(newPerson)))}
    
    setNewName('');
    setNewNumber('');
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
     
      <form onSubmit={addName}>
        <div>
          name: <input value={newName}
           
          onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber}
           
          onChange={handleNumberChange}/>

        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <li key={person.name}>{person.name} {person.number}</li>
        )}
      </ul>
     
    </div>
  )
}

export default App

