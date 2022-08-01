import {legacy_createStore,combineReducers} from "redux"
import { reducer as counterReducer } from "./counterReducer/reducer"
import {reducer as todoReducer} from "./todoReducer/reducer"
import {reducer as loginReducer} from "./loginReducer/reducer"
const rootReducer= combineReducers({counterReducer,todoReducer,loginReducer})
export const store= legacy_createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())