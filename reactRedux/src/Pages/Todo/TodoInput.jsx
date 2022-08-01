import React, { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
const TodoInput = ({addTodo}) => {
    const [todo,setTodo] = useState("")
    
    
    const handleAdd= ()=>{
       addTodo({
           title: todo,
           status: "false"
       })
    }
  return (
    <div>
        <input type="text" value={todo} placeholder='enter todo' onChange={(e)=>setTodo(e.target.value)}/>
        <button onClick={handleAdd}>Add Todo</button>
    </div>
  )
}

export default TodoInput