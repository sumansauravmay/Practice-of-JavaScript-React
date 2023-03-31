import React, { useState } from 'react'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'

const Todo = () => {
    const [todo,setTodos]=useState([]);

    const handleAddTodo=(text)=>{
        const newTodo={
            title:text,
            status:true,
            id:new Date().toDateString()+text
        }
        setTodos([...todo,newTodo])
    }

    const handleToggle=(id)=>{
        const todoAfterUpdate=todo.map((item)=>(
            item.id===id?{...item,status:!item.status}:item
        ))
        setTodos(todoAfterUpdate)
    }

    const handleDelete=(id)=>{
        const tadoafterdelete=todo.filter((item)=>(
            item.id!==id
        ))
        setTodos(tadoafterdelete)
    }

  return (
    <div>
        <AddTodo handleAddTodo={handleAddTodo}/>
        <ol>
            {
                todo.map((item)=>(
                    <TodoItem key={item.id} id={item.id}
                    title={item.title} status={item.status}
                    handleToggle={handleToggle}
                    handleDelete={handleDelete}/>
                ))
            }
        </ol>
    </div>
  )
}

export default Todo