import * as types from "./action.type"
export const handleLoading=()=>{
    return {
        type: types.LOADING
    }
}

export const handleSuccess=(todos)=>{
    return {
        type: types.SUCCESS, payload: todos
    }
}

export const handleError=()=>{
    return {
        type: types.FAILURE
    }
}