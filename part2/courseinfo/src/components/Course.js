// import React from 'react'
// import Header from './Header'
// import Content from './Content'
// import Total from './Total'

// const Course= (props) => {
//   console.log(props.courses[0])
  
//   return (
//     <div>
      
//       <Header course={props.courses[0].name}/>
//       <Content parts={props.courses[0].parts} />
//       <Total parts={props.courses[0].parts}/>
//       <Header course={props.courses[1].name}/>
//       <Content parts={props.courses[1].parts} />
//       <Total parts={props.courses[1].parts}/>

//     </div>
//   )
//   }
  
//   export default Course
import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ({course}) => {
  return (
         <div>
     
           <Header name={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
      
  );
};

export default Course;
