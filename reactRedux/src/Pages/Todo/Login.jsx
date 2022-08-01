import React, { useState } from 'react'
import {useDispatch,useSelector,shallowEqual} from "react-redux"
import axios from "axios"
import { handleSuccess } from '../../Redux/loginReducer/action'
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const navigate= useNavigate()
  const dispatch= useDispatch()
  const store= useSelector(store=>store.loginReducer,shallowEqual)
  
  console.log(store)
  const handleLogin = async()=>{
    const loginData={
      email:email,
      password: pass
    }
    await axios.post(`https://reqres.in/api/login`,loginData)
    .then((res)=>dispatch(handleSuccess(res.data.token)))
    .then(()=>navigate(`/todo`))
  }
  return (
    <div>
       <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
        <input type="password"  onChange={(e)=>setPass(e.target.value)} placeholder="password"/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login