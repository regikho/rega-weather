import React from 'react';

import classes from './DayContainer.module.css';

function DayContainer(props) {
  return (
    <div className={classes['day-container']}>
      <p className={classes.date}>{props.day.weekDay} {props.day.date}</p>
      <p className={classes.temp}>{props.day.temp}&#176;С</p>
      <p>{props.day.feelsLike}&#176;С</p>
      <img src={props.day.icon} />
      <p>{props.day.description}</p>
      
      {/* <p>Влажность: {props.day.humidity}%</p>
      <p>Скорость ветра: {props.day.wind} м/с</p>
      <p>Давление: {props.day.pressure} мм рт. ст.</p> */}
    </div>
  );
}
  
export default DayContainer;