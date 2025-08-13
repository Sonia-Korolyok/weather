export const FETCH_WEATHER = "FETCH_WEATHER";
export const SET_MESSAGE = "SET_MESSAGE";


export const fetchWeather = (weatherData) => ({
    type: FETCH_WEATHER,
    payload: weatherData
});

export const setMessage = (message) => ({
    type: SET_MESSAGE,
    payload: message
})


