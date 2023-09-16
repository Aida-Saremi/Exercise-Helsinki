const PersonForm = ({addName,newName,newNumber,handlePersoneChange,handleNumberChange}) => {
    return (
        <form onSubmit={addName}>
        
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
       );
}
 
export default PersonForm;