const Persons = ({filterPerson,persons,handleDelete}) => {
  return ( 
      <div>
      <ul>
       
        {filterPerson.map(person => <li key={person.name}>{person.name}{person.number}
        <button onClick={() => handleDelete(person.name,person.id)}>Delete</button></li>)}

      </ul>
    </div>
   );
}

export default Persons;