import { DECREMENT, INCREMENT } from "./action.type"

const initialVal= {
    counter:0
}
export const reducer = (state=initialVal,action)=>{
    switch(action.type){
     case INCREMENT:
        return{
            ...state,
            counter: state.counter + action.payload
        }

        case DECREMENT:
        return{
            ...state,
            counter: state.counter - action.payload
        }

        default:
            return state
    }

    
    
}