// import { useState } from 'react'

// const App = () => {
  
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const [total, setTotal] = useState(0)
//   const [average, setAverage] = useState(0)


//   const handlegoodClick = () => {
//     const updateGood=good+1
//     const averageGood=1*updateGood
//     console.log("averageGood",averageGood)
//     setGood(updateGood)
//     setTotal(updateGood + neutral + bad)
//     console.log("totalGood",total)
//     const jam= (good*1 + neutral*0 + bad*(-1))
//     console.log("jamgood",jam)
//     setAverage((good*1 + neutral*0 + bad*(-1))/total)
//   }

//   const handleneutralClick = () => {
//     const updateNuetral=neutral+1
//     const averageNuetral=0*updateNuetral
//     console.log("averageNeutral",averageNuetral)
//     setNeutral(updateNuetral)
//     setTotal(good + updateNuetral + bad)
//     console.log("totalNeutral",total)
//     const jam= (good*1 + neutral*0 + bad*(-1))
//     console.log("jamgood",jam)
//     setAverage((good*1 + neutral*0 + bad*(-1))/total)
    
//   }

//   const handlebadClick = () => {
//     const updateBad=bad+1
//     const averageBad=(-1)*updateBad
//     console.log("averageBad",averageBad)
//     setBad(updateBad)
//     setTotal(good+ neutral + updateBad)
//     console.log("totalBad",total)
//     const jam= (good*1 + neutral*0 + bad*(-1))
//     console.log("jamgood",jam)
//     setAverage((good*1 + neutral*0 + bad*(-1))/total)
//   }
//   return (
//     <div>

//       <h1>give feedback</h1>
      
//       <button onClick={handlegoodClick}>good</button>
//       <button onClick={handleneutralClick}>neutral</button>
//       <button onClick={handlebadClick}>bad</button>
      
//       <h1>statistics</h1>
//       <p>good {good}</p>
//       <p>neutral {neutral}</p>
//       <p>bad {bad}</p>
//       <p>total {total}</p>
//       <p>average {average}</p>
//     </div>
//   )
// }


// export default App

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