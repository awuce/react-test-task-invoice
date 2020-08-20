import {combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'
import terminalsReducer from "./terminals-reducer";

const reducers = combineReducers({
    terminalsPage: terminalsReducer,
    form: formReducer,
});

const store = createStore(reducers);
export default store;