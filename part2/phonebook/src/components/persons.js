
// import DeletePerson from './delete';
// import axios from 'axios';
// const Persons = ({filterPerson,persons}) => {


//   const deleteHandlerof= (name,id) => {
//     const url = `http://localhost:3001/notes/${id}`
//     const person = filterPerson.find(p => p.id === id)
//     console.log( person )
//     // Show a confirmation dialog and proceed only if the user clicks "OK"
//     const shouldDelete = window.confirm("Delete " + name + " ?");

  
//     // if (shouldDelete) {
//     //   axios
//     //   .delete(url)
//     //   .then(() => {
//     //     // Handle success (optional)
//     //   })
//     //   .catch(error => {
//     //     // Handle error (optional)
//     //   });
    
//     //       }
//   }
//     return ( 
//         <div>

// <ul>
//   {filterPerson.map(person => (
//     <DeletePerson
//       key={person.id}
//       name={person.name}
//       number={person.number}
//       deleteHandler={() => deleteHandlerof(person.name,person.id)}
//     />
//   ))}
// </ul>
        
//       </div>
//      );
// }

 
// export default Persons;

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