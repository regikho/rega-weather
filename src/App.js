import React from 'react';
import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import { prepareWeather, prepareWeekWeather } from './common/utils';
import { getWeather, getWeekWeather } from './common/api';
import { MOSCOW_LOCATION } from './common/constants';

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
    inputValue: '',
    timer: null,
    daily: [],
    icon: ''
  }

  handleInputChange = ({ target: { value }}) => {
    clearTimeout(this.state.timer);

    const timer = setTimeout(() => {
      getWeather({ q: value }).then(weather => {
        this.setState(prepareWeather(weather));
      });
    }, 500)

    this.setState({
      timer,
      inputValue: value,
    });
  }
  
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getWeather({
          lon: position.coords.longitude, 
          lat: position.coords.latitude
        }).then(weather => this.setState(prepareWeather(weather)));

        getWeekWeather({
          lon: position.coords.longitude, 
          lat: position.coords.latitude
        }).then(forecast => this.setState({ daily: prepareWeekWeather(forecast.daily) }));
      },
      (error) => {
        getWeather({
          lon: MOSCOW_LOCATION.LONGITUDE, 
          lat: MOSCOW_LOCATION.LATITUDE
        }).then(weather => this.setState(prepareWeather(weather)));

        getWeekWeather({
          lon: MOSCOW_LOCATION.LONGITUDE, 
          lat: MOSCOW_LOCATION.LATITUDE
        }).then(forecast => this.setState({ daily: prepareWeekWeather(forecast.daily) }));
      }
    );
  }

  render() {
    console.log(this.state.daily)
    return (
      <div className="app">
        <Header
          location={this.state.location}
          inputValue={this.state.inputValue}
          onInputChange={this.handleInputChange}
        />
        <Content 
          weekDay={this.state.weekDay}
          date={this.state.date}
          location={this.state.location}
          temp={this.state.temp}
          description={this.state.description}
          humidity={this.state.humidity}
          wind={this.state.wind}
          pressure={this.state.pressure}
          daily={this.state.daily}
          icon={this.state.icon}
        />        
      </div>
    );
  }
}

export default App;
