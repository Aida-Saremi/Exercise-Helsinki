import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [searchTerm, setsearchTerm] = useState('')
  

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

    // const isSearch = persons.map((person) => person.name).includes(searchName);

    // if (isSearch) {
    //   persons.filter(person => person.name=searchName)
     
    // }
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
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setsearchTerm(searchTerm);
    setFilteredPersons(filtered)
  
  
    // Filter persons based on the search term
    
  };

  const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
     
    );
  

  return (
    <div>
      <h2>Phonebook</h2>
       <div>
          filter shown with <input value={searchTerm}
           
          onChange={handleSearchChange}/>
        </div>
         <h2>add a new</h2>
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
      {/* <ul>
        {persons.map(person => 
          <li key={person.name}>{person.name} {person.number}</li>
        )}
      </ul> */}
      {filteredPersons.map((person) => (
  <li key={person.name}>
    {person.name} {person.number}
  </li>
))}
     
    </div>
  )
}

export default App

