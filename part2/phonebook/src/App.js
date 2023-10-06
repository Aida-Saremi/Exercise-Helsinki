import { useState ,useEffect } from 'react'
import Filter from './components/filter';
import PersonForm from './components/personForm';
import Persons from './components/persons';
import personsBackend from './services/personsBackend';
import Notification from './components/notification';
import NotificationError from './components/notificationError';


const baseUrl = 'http://localhost:3001/persons'
const App = () => {

  // containers
  const [persons, setPersons] = useState([]);
  const [newName,setNewName]=useState('');
  const [newNumber,setNewNumber]=useState('');
  const [showPerson,setShowPerson]=useState('');
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  // Get data from server
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

  // after click on submit=add

  
  const addName = (event) => {
    event.preventDefault();
  

    
   
      const isDuplicateName =  persons.map(person => person.name).includes(newName);
      const isDuplicateNumber = persons.map(person => person.number).includes(newNumber);

      if (!isDuplicateName && !isDuplicateNumber) {

        const newPerson = { name: newName, number: newNumber };
  
    
      personsBackend
      .create( newPerson)
      .then(returnPerson=> {
      console.log(returnPerson)
       setPersons(persons.concat(returnPerson))
   
      // Successs messsage after add person
        setSuccessMessage(
        `Added ${newName}`
          )
           setTimeout(() => {
             setSuccessMessage(null)
               }, 5000)
     
              })

      }else if (isDuplicateName && isDuplicateNumber) {
        alert(`Both the name ${newName} and number ${newNumber} are already in the phonebook`);
        
        setNewName('');
        setNewNumber('');
      } else if (isDuplicateName) {
        const replaceNumber = window.confirm(`${newName} is already added to the phonebook,
          replace the old number with a new one?`);
          console.log("replaceNumber",replaceNumber)
  
        if (replaceNumber) {
          const personToUpdate = persons.find(p => p.name === newName);
          const updatedPerson = { ...personToUpdate, number: newNumber };

          // I have problem for transform axios to Backend 
           
          
          const key=updatedPerson.id
        

          personsBackend.update(key, updatedPerson ).then(response => {
            setPersons(
              persons.map(p =>(p.id=== key ? response.data : p))
            );

            setSuccessMessage(
              `${newName}'s number changed`
                )
                 setTimeout(() => {
                   setSuccessMessage(null)
                     }, 5000)
           
                  
            
          })
          .catch(error => {
            setErrorMessage(
              `Information of ${newName}'has already been removed from server.`
                )
                 setTimeout(() => {
                   setErrorMessage(null)
                     }, 5000)
                     setPersons(persons.filter(p=> p.name !== newName))
          });


          console.log("updatedPerson",updatedPerson)
          
          // axios.put(`${baseUrl}/${key}`, updatedPerson).then(response => {
          //   setPersons(persons.map(p => p.id !== key ? p : response.data))
          // })
        }
          
        
        }
        setNewName('');
        setNewNumber('');
    
  };
  
    
    // handleClicks

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
       <Notification message={successMessage}/>
       <NotificationError message={errorMessage}/>
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