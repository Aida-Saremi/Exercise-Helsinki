import React from 'react'
  const Total = ({parts}) => {
    const Sum = parts.reduce((total, p) => total + p.exercises, 0);
  
    return (
      <div>
        <h3>Total of {Sum} exercises</h3>
      </div>
    );
  };
  
  export default Total;
  