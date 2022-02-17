import React from 'react';

import classes from './WeekContainer.module.css';
import DayContainer from './DayContainer/DayContainer';

function WeekContainer(props) {
  return (
    <div className={classes['week-container']}>
      {props.daily.map((day) => (
        <DayContainer day={day} />
      ))} 
    </div>
  );
}
  
export default WeekContainer;