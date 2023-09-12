import React from 'react'
import Part from './Part'
const Content= ({parts}) => {
    
  const allParts = () => parts.map( part =>
    <Part key={part.id} name={part.name} exercises={part.exercises} />
    )

    return (
      <div>
        {allParts()}
      </div>
    )
  }
  
  export default Content

