import StatisticLine from "./StatisticLine";

const Statistics = ({good,neutral,bad}) => {
   
    const all=()=> good+neutral+bad;

    const average=()=>(good*(1)+neutral*(0)+bad*(-1))/(good+neutral+bad)
    const positive=()=>(good*(1) * 100) / (good+neutral+bad);
      

  if (good === 0 && neutral=== 0 && bad === 0) {
    return (
      <div>
        no feed back given
      </div>
    )
  }
  
       return (
        <div>
          <StatisticLine text="good" value ={good} />
          <StatisticLine text="neutral" value ={neutral} />
          <StatisticLine text="bad" value ={bad} />
          <StatisticLine text="all"  value={all()} />
          <StatisticLine text="average"  value={average()}/>
          <StatisticLine text="positive"  value={`${positive()}%`} />
        </div>
      )
       }
  export default Statistics