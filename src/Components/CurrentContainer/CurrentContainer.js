import React from 'react';

import classes from './CurrentContainer.module.css';

function CurrentContainer(props) {
  return (
    <div className={classes['current-container']}>
      <div className={classes['temp-description']}>
        <div>
          <p className={classes.date}>{props.weekDay}, {props.date}</p>
          <p className={classes.location}>{props.location}</p>
          <p className={classes.temp}>{props.temp}&#176;С</p>
          <p>Ощущение: {props.feelsLike}&#176;С</p>
        </div>
        <div className={classes['icon-description']}>
          <img className={classes.img} src={props.icon} />
          <p className={classes.description}>{props.description}</p>
        </div>
      </div>
      
      <hr className={classes.hr}></hr>
      <div className={classes['data-description']}>
        <p>Влажность: {props.humidity}%</p>
        <p>Скорость ветра: {props.wind} м/с</p>
        <p>Давление: {props.pressure} мм рт. ст.</p>
      </div>
    </div>
  );
}

export default CurrentContainer;