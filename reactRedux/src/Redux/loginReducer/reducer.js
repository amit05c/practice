import { loadData, saveData } from "../utlis/localStorage";
import { FAILURE, LOADING, SUCCESS } from "./action.type";
// let localAuth= loadData("userAuth")
// console.log(localAuth.token)
// let userInfo= JSON.parse(localStorage.getItem('userAuth'))
const init = {
  isLoading: false,
  isAuth: loadData('isAuth') || false,
  token:  loadData('token') || null,
  isError: false,
};

export const reducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      }

    case SUCCESS:
      // let info={
      //   isAuth:true,
      //   token:payload
      // }

      saveData("isAuth","true")
      saveData("token",payload)
      return {
        ...state,
        token: payload,
        isLoading: false,
        isError: false,
        isAuth:true
      }

    case FAILURE:
      return {
        ...state,
        isError: false,
      }

    default:
      return {
        ...state,
      }
  }
};
