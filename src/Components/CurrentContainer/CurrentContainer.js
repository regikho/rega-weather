import React from 'react';

import classes from './CurrentContainer.module.css';

function CurrentContainer(props) {
  return (
    <div className={classes['current-container']}>
      <div className={classes['temp-description']}>
        <div>
          <p className={classes.date}>{props.currentForecast.weekDay}, {props.currentForecast.date}</p>
          <p className={classes.location}>{props.currentForecast.location}</p>
          <p className={classes.temp}>{props.currentForecast.temp}&#176;С</p>
          <p>Ощущение: {props.currentForecast.feelsLike}&#176;С</p>
        </div>
        <div className={classes['icon-description']}>
          <img className={classes.img} src={props.currentForecast.icon} />
          <p className={classes.description}>{props.currentForecast.description}</p>
        </div>
      </div>
      
      <hr className={classes.hr}></hr>
      <div className={classes['data-description']}>
        <p>Влажность: {props.currentForecast.humidity}%</p>
        <p>Скорость ветра: {props.currentForecast.wind} м/с</p>
        <p>Давление: {props.currentForecast.pressure} мм рт. ст.</p>
      </div>
    </div>
  );
}

export default CurrentContainer;