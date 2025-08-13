import {base_url} from "../utils/constans.js";

const initialState = {
    weatherData: base_url,
    message: "Enter city name"
};


export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_WEATHER":
            return {
                ...state, weatherData: action.payload, message: ""
            };
        case "SET_MESSAGE":
            return {
                ...state, message: action.payload
            }
        default:
            return state;
    }
};




