import React from 'react'
import Header from './Header'
import Content from './Content'

const Course= (props) => {
  console.log(props)
    
  
  return (
    <div>
      
      <Header course={props.course.name}/>
      <Content parts={props.course.parts} />
    

    </div>
  )
  }
  
  export default Course





