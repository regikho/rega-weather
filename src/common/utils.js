import { MILLISECONDS_IN_SECOND } from "./constants";

export function getWeekDay(date) {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    
    return days[date.getDay()];
}

export function prepareWeather(weather) {
    return {
        weekDay: getWeekDay(new Date(weather.dt * MILLISECONDS_IN_SECOND)),
        date: new Date(weather.dt * MILLISECONDS_IN_SECOND).toLocaleDateString(),
        location: weather.name,
        temp: Math.round(weather.main.temp) > 0 ? '+' + Math.round(weather.main.temp) : Math.round(weather.main.temp),
        feelsLike: Math.round(weather.main.feels_like) > 0 ? '+' + Math.round(weather.main.feels_like) : Math.round(weather.main.feels_like),
        description: weather.weather[0].description[0].toUpperCase() + weather.weather[0].description.slice(1),
        humidity: weather.main.humidity,
        wind: weather.wind.speed,
        pressure: weather.main.pressure,
        icon: `https://openweathermap.org/img/wn/${weather.weather[0]['icon']}@2x.png`,
    }
}

export function prepareWeekWeather(daily) {
    return daily.slice(1).map((day) => ({
             weekDay: getWeekDay(new Date(day.dt * MILLISECONDS_IN_SECOND)),
             date: new Date(day.dt * MILLISECONDS_IN_SECOND).toLocaleDateString(),
             temp: Math.round(day.temp.day) > 0 ? '+' + Math.round(day.temp.day) : Math.round(day.temp.day),
             feelsLike: Math.round(day.feels_like.day) > 0 ? '+' + Math.round(day.feels_like.day) : Math.round(day.feels_like.day),
             description: day.weather[0].description[0].toUpperCase() + day.weather[0].description.slice(1),
             humidity: day.humidity,
             wind: day.wind_speed,
             pressure: day.pressure,
             icon: `https://openweathermap.org/img/wn/${day.weather[0]['icon']}@2x.png`
           }))
}