import * as types from "./action.type"

export const handleInC= (value)=>{
    return {
        type: types.INCREMENT, payload: value
    }
}

export const handleDec= (value)=>{
    return {
        type: types.DECREMENT, payload: value
    }
}