import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {weatherReducer} from "../reducer/weatherReducer.js";
import {thunk} from "redux-thunk";


export const store = createStore(weatherReducer, applyMiddleware(thunk));