
import { useState } from 'react'
import Statistics from './components/statitstics'
import Button from './components/button'
const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
    
  const handleGoodClick =() =>{
    const updatedGood = good + 1
    setGood(updatedGood)
    
    
  }
  const handleNeutralClick =() =>{
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    
    
  }

  const handleBadClick =() =>{
    const updatedBad = bad + 1
    setBad(updatedBad)
     
   
  }
  
  
  return (
  
    <div>
      <h1>give feed back</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
       <h2>Statistics</h2>
       <Statistics good={good} neutral={neutral} bad={bad}/>
       
    </div>
  )
}

export default App