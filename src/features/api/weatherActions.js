import {setMessage} from "../message/messageSlice.js";
import {api_key, base_url} from "../../utils/constans.js";
import {setWeather} from "../weather/weatherSlice.js";

export const fetchWeather = (city) => {
    return (dispatch) => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(res => res.json())
            .then(data => {
                dispatch(setWeather({
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
