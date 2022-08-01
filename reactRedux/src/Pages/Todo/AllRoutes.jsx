import React from 'react'
import {Routes,Route} from "react-router-dom"
import { loadData } from '../../Redux/utlis/localStorage'
import Counter from './Counter'
import Home from './Home'
import Login from './Login'
import Todo from './Todo'
import TodoDetails from './TodoDetails'
import {useNavigate,Navigate} from "react-router-dom"

const AllRoutes = () => {
  const isAuth= loadData("isAuth")
  const navigate = useNavigate()
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/counter' element={<Counter/>} />
            <Route path='/todo' element={isAuth ? <Todo/> : <Navigate to={'/login'}/> } />
            <Route path='/todo/:id' element={<TodoDetails/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes