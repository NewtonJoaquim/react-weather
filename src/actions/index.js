import axios from 'axios';

const API_KEY = 'dc31f61f94c9ce48ddf433e5af2363bd'
const URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER= 'FETCH_WEATHER';

export default function fetchWeather(city){
    const url=`${URL}&q=${city}`
    const request = axios.get(url);

    return{
        type:FETCH_WEATHER,
        payload:request
    }
}