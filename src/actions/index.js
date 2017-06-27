const API_KEY='ceab2eb4f0f95407eeebda7483245304';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const WEATHER_URL=`http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

import axios from 'axios';

export const FETCH_WEATHER='FETCH_WEATHER';
export const CURRENT_WEATHER='CURRENT_WEATHER';

export function fetchWeather(cityName){
  const url=`${ROOT_URL}&q=${cityName},IN`;
  const request=axios.get(url);

  return{
    type:FETCH_WEATHER,
    payload:request
  }
}

export function currentWeather(cityName){
  const url=`${WEATHER_URL}&q=${cityName},IN`;
  const request=axios.get(url);

  return{
    type:CURRENT_WEATHER,
    payload:request
  }
}
