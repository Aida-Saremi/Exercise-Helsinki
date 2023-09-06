const Statistics = ({good,neutral,bad}) => {
   
    const total= good+neutral+bad;
  const average=(good*(1)+neutral*(0)+bad*(-1))/total
  const positive= (good*(1) * 100) / total;

  
       return (
        <div>
         <p>total {total}</p>
         <p>average {average}</p>
         <p>positive {positive}%</p>
        </div>
      )
       }
  export default Statistics