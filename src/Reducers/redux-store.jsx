import {combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'
import terminalsReducer from "./terminals-reducer";
import buyersReducer from "./buyers-reducer";

const reducers = combineReducers({
    terminalsPage: terminalsReducer,
    buyersPage: buyersReducer,
    form: formReducer,
});

const store = createStore(reducers);
export default store;