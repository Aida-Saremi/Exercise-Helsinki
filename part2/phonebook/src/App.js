import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  
  const [newName,setNewName]=useState('');
  const [newNumber,setNewNumber]=useState('');
  const [showPerson,setShowPerson]=useState('');

  const addName = (event) => {
    event.preventDefault()

    console.log('button clicked', event.target)
    const newPerson={ name: newName, number: newNumber }

    const isDuplicate = persons.map((person) => person.name).includes(newName);


    if (isDuplicate) {
      alert(`${newName} is already added to the phonebook`);
      setNewName('');
    setNewNumber('');
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName('');
    setNewNumber('');
    }
  }
  

  const handlePersoneChange = (event) =>{
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) =>{
    setNewNumber(event.target.value)
  }
  const showhandlre = (event)=> {
    setShowPerson(event.target.value)
 }
 const filterPerson = showPerson === '' ? persons : persons.filter(person =>
  person.name.toLowerCase().includes(showPerson.toLowerCase())
  )


  return (
    <div>
       <h2>Phonebook</h2>
       filter shown with <input value={showPerson} onChange={showhandlre} />
      <form onSubmit={addName}>
        <h2>add a new</h2>
        <div>
          name: <input value={newName} onChange={handlePersoneChange} />
        </div>
        <br />
        <div>
         number: <input value={newNumber} onChange={handleNumberChange} />

        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
         
          {filterPerson.map(person => <li key={person.name}>{person.name}{person.number}</li>)}

        </ul>
      </div>

      
    </div>
  )
}
export default App