import { MILLISECONDS_IN_SECOND, API_KEY } from './constants';

export const customFetch = (url, params) => {
    const stringParams = [];

    for (let key in params) {
        stringParams.push(`${key}=${params[key]}`)
    }

    const urlWithParams = `${url}?${stringParams.join('&')}`
    
    return fetch(urlWithParams).then(response => response.json());
}

export const getWeather = (params) => customFetch('https://api.openweathermap.org/data/2.5/weather', {
    ...params,
    units: 'metric',
    lang: 'ru',
    appid: API_KEY,
 });


export const getWeekWeather = (params) => customFetch('https://api.openweathermap.org/data/2.5/onecall', {
    ...params,
    units: 'metric',
    lang: 'ru',
    exclude: 'current,minutely,hourly,alerts',
    appid: API_KEY,
 });
 