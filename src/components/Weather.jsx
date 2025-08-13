import { useSelector } from 'react-redux';


    const Weather = () => {
        const weather = useSelector(state => state.weather);
        const message = useSelector(state => state.message);


        return (
            <div className={'infoWeather'}>
                {!message &&
                    <>
                        <p>Location: {weather.country}, {weather.city}</p>
                        <p>Temperature: {weather.temp}</p>
                        <p>Pressure: {weather.pressure}</p>
                        <p>Sunset: {weather.sunset}</p>
                    </>
                }
                {message}
            </div>
        );


    }
;
export default Weather;