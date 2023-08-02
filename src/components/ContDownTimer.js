// The Task is to implement a Countdown Timer in React js 

import React,{useState,useEffect} from 'react';
const CountDownTimer=(initialSeconds)=>{
    const[seconds,setSeconds]=useState(initialSeconds);

    useEffect(()=>{
        const Timer=setInterval(()=>{
            if(seconds>0){
                setSeconds((prev)=> prev-1);

            }
        },1000)
        return ()=> clearInterval(Timer);
    },[seconds]);

    return(
        <div>{seconds}</div>
    );
    

} 

export default CountDownTimer;