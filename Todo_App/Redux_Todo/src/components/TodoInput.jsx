import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/action';

const TodoInput = () => {
const [value,setValue]=useState("")
const dispatch=useDispatch();


const handleChange=(e)=>{
    setValue(e.target.value)
}

const handleSubmit=(e)=>{
    e.preventDefault();
    if(value)
    {
dispatch(
    addTodo({
        id:Date.now(),
        value,
        isCompleted:false,
    })
    
);
setValue("")
    }
}


  return (
    <div>
 <form onSubmit={handleSubmit}>
    <input placeholder="type here..." value={value} 
    onChange={handleChange}/>
      <button type='submit'>Add</button>
    </form>
    {/* <h1>TodoInput</h1> */}
    </div>
   
     
   
  )
}

export default TodoInput
