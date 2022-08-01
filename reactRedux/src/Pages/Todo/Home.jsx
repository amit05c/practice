import React from 'react'
import {NavLink} from "react-router-dom"

const Home = () => {
  return (
    <div style={{display:'flex', gap:"1rem"}}>
        <NavLink to={'/counter'}>Counter</NavLink>
        <NavLink to={'/todo'}>Todo</NavLink>
        <NavLink to={'/login'}>Login</NavLink>
    </div>
  )
}

export default Home