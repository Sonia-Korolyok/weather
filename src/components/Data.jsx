import React from 'react';
import Weather from "./Weather.jsx";
import Form from "./Form.jsx";
import {api_key, base_url} from "../utils/constans.js";
import { useDispatch, useSelector } from 'react-redux';
import {fetchWeather, setMessage} from "../actions/weatherAction.js";


const Data = () => {
    const dispatch = useDispatch();
    const setWeather = useSelector(state => state.weatherData);
    // const [weatherInfo, setWeatherInfo] = useState({});
    // const [message, setMessage] = useState('Enter city name');
    const getWeather = city => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(res => res.json())
            .then(data => {
                dispatch(fetchWeather({
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
    return (
        <div>
            <Form getWeather={getWeather}/>
            <Weather />
        </div>
    );
};

export default Data;