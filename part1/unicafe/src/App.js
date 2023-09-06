
import { useState } from 'react'

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total= good+neutral+bad;
  const average=(good-bad)/total
  const positive= (good * 100) / total;
    
  // const [all, setAll] = useState(0)
  
  // const [average, setAverage] = useState(0)
  // const [positive, setPositive] = useState(0)
  
  
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
       <p>good {good}</p>
       <p>neutral {neutral}</p>
       <p>bad {bad}</p>
       <p>total {total}</p>
       <p>average {average}</p>
       <p>positive {positive}%</p>
    </div>
  )
}

export default App