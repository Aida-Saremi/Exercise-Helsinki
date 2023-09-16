const Filter = ({showPerson,showhandlre}) => {
    return (  
        <div>
        filter shown with <input value={showPerson}
         onChange={showhandlre} /> 
         
         </div> );
         
}
 
export default Filter;