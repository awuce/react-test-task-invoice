import {applyMiddleware, combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk"
import terminalsReducer from "./terminals-reducer";
import buyersReducer from "./buyers-reducer";
import loginReducer from "./login-reducer";

const reducers = combineReducers({
    terminalsPage: terminalsReducer,
    buyersPage: buyersReducer,
    loginPage: loginReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store
export default store;