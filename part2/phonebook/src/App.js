import { useState ,useEffect } from 'react'
import Filter from './components/filter';
import PersonForm from './components/personForm';
import Persons from './components/persons';
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName,setNewName]=useState('');
  const [newNumber,setNewNumber]=useState('');
  const [showPerson,setShowPerson]=useState('');

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

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
     setPersons(persons.concat(newPerson))
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

       
      <Filter showPerson={showPerson}
         showhandlre={showhandlre}/>
      <h2>Add a new</h2>

      <PersonForm addName={addName} newName={newName} newNumber={newNumber} 
      handleNumberChange={handleNumberChange}
      handlePersoneChange={handlePersoneChange}/>
     
      <h2>Numbers</h2>

      <Persons filterPerson={filterPerson} persons={persons}/>
      

      
    </div>
  )
}
export default App
