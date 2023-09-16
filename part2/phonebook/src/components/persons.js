const Persons = ({filterPerson,persons}) => {
    return ( 
        <div>
        <ul>
         
          {filterPerson.map(person => <li key={person.name}>{person.name}{person.number}</li>)}

        </ul>
      </div>
     );
}
 
export default Persons;