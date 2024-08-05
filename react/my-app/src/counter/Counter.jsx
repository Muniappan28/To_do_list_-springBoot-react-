import './Counter.css'
import { useState } from 'react'
import CounterButton from './CounterButton'
export default function Counters(){
    const [count,setCount]=useState(0);

    function incrementCOuntParent(by){
        setCount(count+by)
    }
    function decrementCOuntParent(by){
        setCount(count-by)
    }

    function ResetCounter(){
        setCount(0)
    }
    return (
    <>
      <span className="totalCount">{count}</span>
      <CounterButton by={1}   incrementMethod={incrementCOuntParent} decrementMethod={decrementCOuntParent}/>
      <CounterButton by={2}   incrementMethod={incrementCOuntParent} decrementMethod={decrementCOuntParent}/>
      <CounterButton by={3}   incrementMethod={incrementCOuntParent} decrementMethod={decrementCOuntParent}/>
      <button className="ResetButton" onClick={ResetCounter}>Reset</button>
    </>
  );
    
}

