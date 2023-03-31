import { GET_TODOS,ADD_TODO,UPDATE_TODO,DELETE_TODO } from "./actionTypes";

export const getTodos=()=>({
    type:GET_TODOS,
    payload:[
        {id:1,value:"Memory Todo 1",isCompleted:false},
        {id:2,value:"Memory Todo 2",isCompleted:true},
        {id:3,value:"Memory Todo 3",isCompleted:true},
        {id:4,value:"Memory Todo 4",isCompleted:false},
    ]

})

export const addTodo=(todo)=>({
    type:ADD_TODO,
    payload:todo

})

export const updateTodo=(id,changes)=>({
    type:UPDATE_TODO,
    payload:{
        id,
        changes
    }

})

export const deleteTodo=(id)=>({
    type:DELETE_TODO,
    payload:id

})

