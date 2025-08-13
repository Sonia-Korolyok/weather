const Form = ({getWeather}) => {
    const getCity = e => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        getWeather(city);
    }
    return (
        <form onSubmit={getCity}>
            <input name={'city'} type="text" placeholder="City name"/>
            <button type={'submit'}>Get Weather</button>
        </form>
    );
};

export default Form;

// import { useDispatch } from 'react-redux';
// import {fetchWeather} from '../actions/weatherAction.js';
//
// const Form = ({getWeather}) => {
//     const dispatch = useDispatch();
//     const getCity = e => {
//         e.preventDefault();
//         const city = e.currentTarget.city.value.trim();
//         if (city) {
//             dispatch(fetchWeather(city));
//         }
//         }
//
//         return (
//             <form onSubmit={getCity}>
//                 <input name={'city'} type="text" placeholder="Enter city name"/>
//                 <button type="submit">Get Weather</button>
//             </form>
//         );
//     };

//export default Form;