import React from 'react';

import classes from './CurrentContainer.module.css';

function CurrentContainer(props) {
  return (
    <div className={classes['current-container']}>
      <p className={classes.date}>{props.weekDay}, {props.date}</p>
      <p className={classes.location}>{props.location}</p>
      <p className={classes.temp}>{props.temp}&#176;С</p>
      <p>{props.description}</p>
      <p>Влажность: {props.humidity}%</p>
      <p>Скорость ветра: {props.wind} м/с</p>
      <p>Давление: {props.pressure} мм рт. ст.</p>
    </div>
  );
}

export default CurrentContainer;