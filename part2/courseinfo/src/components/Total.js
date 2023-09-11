import React from 'react'
const Total= (props) => {
    
    
  
    return (
      <div>
        <h3>Total of {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises+props.parts[3].exercises} exercises</h3>
       
      </div>
    )
  }
  
  export default Total