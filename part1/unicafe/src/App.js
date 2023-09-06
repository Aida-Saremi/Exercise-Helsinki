
import { useState } from 'react'
import Statistics from './components/statitstics'

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
    
  const handleGoodtClick =() =>{
    const updatedGood = good + 1
    setGood(updatedGood)
    
    
  }
  const handleNeutraltClick =() =>{
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    
    
  }

  const handleBadtClick =() =>{
    const updatedBad = bad + 1
    setBad(updatedBad)
     
   
  }
  
  
  return (
  
    <div>
      <h1>give feed back</h1>
       <button onClick={handleGoodtClick}>good</button>
       <button onClick={handleNeutraltClick}>neutral</button>
       <button onClick={handleBadtClick}>bad</button>
       <h2>Statistics</h2>
       <Statistics good={good} neutral={neutral} bad={bad}/>
       
    </div>
  )
}

export default App