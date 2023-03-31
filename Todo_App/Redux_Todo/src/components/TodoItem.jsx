import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../redux/action';
import { deleteTodo } from '../redux/action';


const TodoItem = ({id,value,isCompleted}) => {
const dispatch=useDispatch();

  return (
   <>
    <div onClick={()=>dispatch(
        updateTodo(id,{
        isCompleted:!isCompleted,
        })
        )
        }
        >
      {value}={isCompleted?"Completed":"In Complete"}
      
    </div>
    <button onClick={()=>dispatch(deleteTodo(id))}>Delete</button>
    </>
  )
}

export default TodoItem
