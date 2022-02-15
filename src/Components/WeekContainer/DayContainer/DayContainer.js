import React from 'react';

import classes from './DayContainer.module.css';

function DayContainer(props) {
  return (
    <div className={classes['day-container']}>
      <p>{props.state.year}</p>
      <p className={classes.temp}>{props.state.temp}&#176;С</p>
      <p>{props.state.description}</p>
      <p>Влажность: {props.state.humidity}%</p>
      <p>Скорость ветра: {props.state.wind} м/с</p>
      <p>Давление: {props.state.pressure} мм рт. ст.</p>
      
    </div>
  );
}
  
export default DayContainer;