import React from 'react';
import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import { getWeekDay } from './common/utils';
import { MILLISECONDS_IN_SECOND, MOSCOW_LOCATION } from './common/constants';

class App extends React.Component {

  state = {
    weekDay: null,
    date: null,
    location: null,
    temp: null,
    description: null,
    humidity: null,
    wind: null,
    pressure: null,

  }

  // handleInputChange = ({ target: { name, value }}) => {
  //   this.setState({
  //     [name]: value
  //   })
  // }

  componentDidMount() {
    const getForecast = (lon, lat) =>
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(weather => this.setState({
      weekDay: getWeekDay(new Date(weather.dt * MILLISECONDS_IN_SECOND)),
      date: new Date(weather.dt * MILLISECONDS_IN_SECOND).toLocaleDateString(),
      location: weather.name,
      temp: Math.round(weather.main.temp) > 0 ? '+' + Math.round(weather.main.temp) : Math.round(weather.main.temp),
      description: weather.weather[0].description,
      humidity: weather.main.humidity,
      wind: weather.wind.speed,
      pressure: weather.main.pressure,
    }));

    navigator.geolocation.getCurrentPosition(
      function(position) {
        getForecast(position.coords.longitude, position.coords.latitude)
      },
      function(error) {
        getForecast(MOSCOW_LOCATION.LONGITUDE, MOSCOW_LOCATION.LATITUDE)
      }
      
    );
  }

  render() {

    return (
      <div className="app">
        <Header 
          location={this.state.location}
          onInputChange={this.handleInputChange}
        />
        <Content 
          state={this.state}
        />        
      </div>
    );
  }
}

export default App;
