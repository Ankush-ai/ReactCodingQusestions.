 // paretn component that passes data to child component 
 
import React, {useState} from 'react'
import ChildComp from './components/ChildComp';
 
 function ParentComp() {

    // eslint-disable-next-line no-unused-vars
    const[message,setMessage]=useState("hello!");

   return (
     <div>ParentComp

    <ChildComp message={message}/>
     </div>
     
   )
 }
 
 export default ParentComp