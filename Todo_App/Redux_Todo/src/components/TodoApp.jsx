import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../redux/action'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem';

const TodoApp = () => {
const todos=useSelector((store)=>store.todos)

const dispatch=useDispatch();

useEffect(()=>{
    dispatch(getTodos())
},[dispatch])

  return (
    <div>
      <h1>TodoApp</h1>
      <TodoInput/>
      {
        todos.map((todo)=>(
            <TodoItem key={todo.id} {...todo} />
        ))
      }
    </div>
  )
}

export default TodoApp
