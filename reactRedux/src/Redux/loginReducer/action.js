import * as types from "./action.type"
export const handleLoading=()=>{
    return {
        type: types.LOADING
    }
}

export const handleSuccess=(token)=>{
    return {
        type: types.SUCCESS, payload: token
    }
}

export const handleError=()=>{
    return {
        type: types.FAILURE
    }
}