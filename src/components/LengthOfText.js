// The task is to immplement a functionality in react js that displays the number if charecters  typed in real time 
 
import React ,{useState} from 'react';
const CharLength=()=>{
    const [text,setText]=useState("");

    const toggleLength=(e)=>{
        setText(e.target.value);

    }

    return(
        <div>
            <input type="text" value={text.length} 
             onChange={()=>toggleLength()}/>
        </div>
    );
}

export default CharLength;