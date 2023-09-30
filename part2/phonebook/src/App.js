import { useState ,useEffect } from 'react'
import Filter from './components/filter';
import PersonForm from './components/personForm';
import Persons from './components/persons';
import personsBackend from './services/personsBackend';
import axios from 'axios';


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName,setNewName]=useState('');
  const [newNumber,setNewNumber]=useState('');
  const [showPerson,setShowPerson]=useState('');

  useEffect(() => {
    console.log('effect')
    personsBackend
      .getAll()
      .then(initialPersons=> {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }, [])
  console.log('render', persons.length, 'persons')


  const addName = (event) => {
    event.preventDefault()

    console.log('button clicked', event.target)
    const newPerson={ name: newName, number: newNumber }
    
    personsBackend
    .create( newPerson)
    .then(returnPerson=> {
    console.log("returnPerson",returnPerson)
    
    
    
  const isDuplicateName = persons.map((person) => person.name).includes(returnPerson.name);
  const isDuplicateNumber = persons.map((person) => person.number).includes(returnPerson.number);
 
  if (isDuplicateName && isDuplicateNumber) {
   
    alert(`Both the name ${newName} and number ${newNumber} are already in the phonebook`);
    setNewName('');
    setNewNumber('');
  } else if (isDuplicateName) {
    console.log("name is repeated")
    alert(`${newName} is already added to the phonebook`);
    setNewName('');
    setNewNumber('');
  } else if (isDuplicateNumber) {
    alert(`The number ${newNumber} is already associated with another contact`);
    setNewName('');
    setNewNumber('');
  } else {

    setPersons(persons.concat(returnPerson))
    // Create a new person object
    // const newPerson = {
    //   name: newName,
    //   number: newNumber,
    // };
 
    // // Add the new person to the phonebook
    // setPersons([...persons, newPerson]);
 
    // // Clear input fields
    // setNewName('');
    // setNewNumber('');

    // const isDuplicate = persons.map((person) => person.name).includes(newName);



    // if (isDuplicate) {
    //   alert(`${newName} is already added to the phonebook`);
    //   setNewName('');
    // setNewNumber('');
    // } else {
    //  setPersons(persons.concat(newPerson))
    //   setNewName('');
    // setNewNumber('');
    // }
    }
  })
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

  const handleDelete = (name,id) => {
   const DeletePerson= window.confirm("Delete " + name + " ?") 
    console.log(name,id)
   
    if (DeletePerson) {
      personsBackend
      .remove(id)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== id))
        
      })
      .catch(error => {
        
      });
    
          }
     
  }


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

      <Persons filterPerson={filterPerson} persons={persons} handleDelete={handleDelete} />
   
      
    </div>
  )
}
export default App