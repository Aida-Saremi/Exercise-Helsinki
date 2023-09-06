const Statistics = ({good,neutral,bad}) => {
   
    const total= good+neutral+bad;

    const average=(good*(1)+neutral*(0)+bad*(-1))/total
    const positive= (good*(1) * 100) / total;
      

  if (good === 0 && neutral=== 0 && bad === 0) {
    return (
      <div>
        no feed back given
      </div>
    )
  }
  
       return (
        <div>
         <p>good {good}</p>
         <p>neutral {neutral}</p>
         <p>bad {bad}</p>
         <p>total {total}</p>
         <p>average {average}</p>
         <p>positive {positive}%</p>
        </div>
      )
       }
  export default Statistics