import React, { useState } from 'react'

const AddTodo = ({handleAddTodo}) => {
    const [text,setText]=useState("");

const inputstyle={
padding:"10px"
}

const handlechange=()=>{
    handleAddTodo(text);
    setText("")
    console.log("Yes")
}

  return (
    <div style={{display:"flex",gap:'10px',justifyContent:"center",marginTop:"10px"}}>
        <input style={{width:"250px"}}
         value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder='Enter New Task'/>
        <button style={inputstyle} onClick={handlechange}>Add</button>
    </div>
  )
}

export default AddTodo