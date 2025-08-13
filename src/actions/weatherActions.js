import {api_key, base_url} from "../utils/constans.js";

export const SET_WEATHER = "SET_WEATHER";
export const SET_MESSAGE = "SET_MESSAGE";


export const satWeather = (weather) => ({
    type: SET_WEATHER,
    payload: weather
});

export const setMessage = (message) => ({
    type: SET_MESSAGE,
    payload: message
})

export const fetchWeather = (city) => {
    return dispatch => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(res => res.json())
            .then(data => {
                dispatch(satWeather({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: (new Date(data.sys.sunset * 1000)).toLocaleTimeString()
                }));
                dispatch(setMessage(""))
            })
            .catch(err => {
                console.log(err);
                dispatch(setMessage('Enter correct city name'));
            });
    }
}
