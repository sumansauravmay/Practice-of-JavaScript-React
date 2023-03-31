import React from 'react'

const TodoItem = ({id,title,status,handleDelete,handleToggle}) => {
  return (
    <div>
        <li>
            {title}-{status?"completed":"Not Completed"}
            <button onClick={()=>handleToggle(id)}>Toggle</button>
            <button onClick={()=>handleDelete(id)}>Delete</button>
        </li>
    </div>
  )
}

export default TodoItem