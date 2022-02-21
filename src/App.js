import React from 'react';
import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import { prepareWeather, prepareWeekWeather } from './common/utils';
import { getWeather, getWeekWeather } from './common/api';
import { MOSCOW_LOCATION } from './common/constants';

class App extends React.Component {

  state = {
    inputValue: '',
    timer: null,
    dailyForecast: [],
    currentForecast: [],
    lon: null,
    lat: null
  }

  handleInputChange = ({ target: { value }}) => {
    clearTimeout(this.state.timer);

    const timer = setTimeout(() => {
      getWeather({ q: value }).then(weather => {
        this.setState({ currentForecast: prepareWeather(weather) });

        getWeekWeather({
          lon: weather.coord.lon,
          lat: weather.coord.lat
        }).then(forecast => {
          this.setState({ dailyForecast: prepareWeekWeather(forecast.daily) });
        });
  
      });
    }, 500)

    this.setState({
      timer,
      inputValue: value,
    });
  }
  
  componentDidMount() {
    getWeekWeather({
        lon: this.state.lon,
        lat: this.state.lat
      }).then(forecast => {
        this.setState({ dailyForecast: prepareWeekWeather(forecast.daily) });
      });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        getWeather({
          lon: position.coords.longitude, 
          lat: position.coords.latitude
        }).then(weather => this.setState({ currentForecast: prepareWeather(weather) }));

        getWeekWeather({
          lon: position.coords.longitude, 
          lat: position.coords.latitude
        }).then(forecast => this.setState({ dailyForecast: prepareWeekWeather(forecast.daily) }));
      },
      (error) => {
        getWeather({
          lon: MOSCOW_LOCATION.LONGITUDE, 
          lat: MOSCOW_LOCATION.LATITUDE
        }).then(weather => this.setState({ currentForecast: prepareWeather(weather) }));

        getWeekWeather({
          lon: MOSCOW_LOCATION.LONGITUDE, 
          lat: MOSCOW_LOCATION.LATITUDE
        }).then(forecast => this.setState({ dailyForecast: prepareWeekWeather(forecast.daily) }));
      }
    );
  }

  render() {
    return (
      <div className="app">
        <Header
          inputValue={this.state.inputValue}
          onInputChange={this.handleInputChange}
        />
        <Content 
          dailyForecast={this.state.dailyForecast}
          currentForecast={this.state.currentForecast}
        />        
      </div>
    );
  }
}

export default App;
