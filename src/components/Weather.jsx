import { useSelector } from 'react-redux';

        // if (message) {
        //     return (
        //         <div>{message}</div>
        //     )
        // } else {

    const Weather = () => {
        const weather = useSelector(state => state.weatherData);
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