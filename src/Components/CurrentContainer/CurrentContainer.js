import React from 'react';

import classes from './CurrentContainer.module.css';

function CurrentContainer(props) {
  return (
    <div className={classes['current-container']}>
      <p className={classes.date}>{props.state.weekDay}, {props.state.date}</p>
      <p className={classes.location}>{props.state.location}</p>
      <p className={classes.temp}>{props.state.temp}&#176;С</p>
      <p>{props.state.description}</p>
      <p>Влажность: {props.state.humidity}%</p>
      <p>Скорость ветра: {props.state.wind} м/с</p>
      <p>Давление: {props.state.pressure} мм рт. ст.</p>
      
    </div>
  );
}

export default CurrentContainer;