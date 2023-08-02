// The Task is to Implement a counter using Functional Components 
import React,{useState,useEffect} from 'react';
const CounterApp=()=>{
    const[state,setState]=useState(0);
    useEffect(()=>{
        alert("CLicked");
    })

    return(
        <>
        <h5>Counter:{state}</h5>
        <button onClick={()=>setState(state+1)}>Increment</button>
        <button onClick={()=>setState(state-1)}>Deccrement</button>
        </>
    );
}

export default CounterApp;
