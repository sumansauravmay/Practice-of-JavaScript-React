import { GET_TODOS,ADD_TODO,UPDATE_TODO,DELETE_TODO } from "./actionTypes";

const initialState={
    todos:[],
}


export const todoReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_TODOS:{
            return {
                ...state,
                todos:payload,
            }
        }

        case ADD_TODO:{
            return {
                ...state,
                todos:[...state.todos,payload],
            }
        }

        case UPDATE_TODO:{
            const updatedToods=state.todos.map((todo)=>{
                if(todo.id===payload.id)
                {
                    return {
                        ...todo,
                        ...payload.changes,
                    }
                }
                return todo;
            })
            return {
                ...state,
                todos:updatedToods, 
            }
        }

        case DELETE_TODO:{
            const filteredTodos=state.todos.filter((todo)=>todo.id!==payload
            )
            return {
                ...state,
                todos:filteredTodos,
            }
        }


        default:{
            return state;
        }
    }
}