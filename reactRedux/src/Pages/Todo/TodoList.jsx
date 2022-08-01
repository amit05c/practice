import React from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'

const TodoList = ({todo,deleteTodo,getTodo}) => {
    const navigate= useNavigate()
    const handleEdit= (id)=>{
       navigate(`${id}`)
    }

    const handleStatus= async(todo,id)=>{
        await axios.patch(`http://localhost:8080/todos/${id}`,{
            ...todo,
            status: todo.status=="false" ? "Done" : "false"
        }).then(()=>getTodo())
    }

  return (
    <div>
        <h1>{todo.title}</h1>
        <button onClick={()=>handleStatus(todo,todo.id)}>{todo.status=="false" ? "Not Done" : "Done"}</button>
        <button onClick={()=>handleEdit(todo.id)}>Edit</button>
        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
       
    </div>
  )
}

export default TodoList