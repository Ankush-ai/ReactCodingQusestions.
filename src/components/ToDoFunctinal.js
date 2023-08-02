// The Task is to implement a todo list using functional components 
import React,{useState} from 'react';
const ToDoFunctional=()=>{
    const[item,updateItem]=useState(["Read"]);
    const[text,UpdateText]=useState("");


const handleSubmit=(e)=>{
    e.preventDefault();
    if(text.length===0||!text) return;
    UpdateText("");
    updateItem([...item,[text]]);


}

const handleCancel=(index)=>{
    const newTodos=[...item];
    newTodos.splice(index,1);
    updateItem(newTodos);

}



    return(
    <div>

<h1>Todo Application</h1>
        <label>Add Task or Todo item</label>
        <input
      type="text"
      value={text}
      onChange={(e) => UpdateText(e.target.value)}
    />
 <button onClick={(e) => handleSubmit(e)}>Submit</button>
    <ol>
      {item.map((data, index) => (
        <li key={data.id}>
          {data}
          <button onClick={() => handleCancel(index)}>Cancel</button>
        </li>
      ))}
    </ol>
    
        
    
    </div>
        
    );

};
export default ToDoFunctional;