import { useState } from 'react'

const App = () => {
  
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handlegoodClick = () => {
    setGood(good+ 1)
  }

  const handleneutralClick = () => {
    setNeutral(neutral+ 1)
  }

  const handlebadClick = () => {
    setBad(bad+ 1)
  }
  return (
    <div>

      <h1>give feedback</h1>
      
      <button onClick={handlegoodClick}>good</button>
      <button onClick={handleneutralClick}>neutral</button>
      <button onClick={handlebadClick}>bad</button>
      
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      
    </div>
  )
}


export default App