import {SET_WEATHER, SET_MESSAGE} from "../actions/weatherActions.js";

const defaultState = {
    weather: {},
    message: "Enter city name"
};


export const weatherReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_WEATHER":
            return {...state, weather: action.payload, message: ""}
        case "SET_MESSAGE":
            return {...state, message: action.payload}
        default:
            return state;
    }
};




