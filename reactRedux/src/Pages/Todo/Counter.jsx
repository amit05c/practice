import React from 'react'
import {useSelector,shallowEqual,useDispatch} from 'react-redux'
import { handleDec, handleInC } from '../../Redux/counterReducer/action'


const Counter = () => {
    const dispatch = useDispatch()
  const store= useSelector(store=>store.counterReducer.counter)
  console.log(store)
  return (
    <div>
        <h1>{store}</h1>
      <button onClick={()=>dispatch(handleInC(10))}>INCREMENT</button>
      <button onClick={()=>dispatch(handleDec(5))}>DECREMENT</button>
    </div>
  )
}

export default Counter