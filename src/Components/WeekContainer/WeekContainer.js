import React from 'react';

import classes from './WeekContainer.module.css';
import DayContainer from './DayContainer/DayContainer';

function WeekContainer(props) {
  return (
    <div className={classes['week-container']}>
      <DayContainer 
        state={props.state}
      />      
    </div>
  );
}
  
export default WeekContainer;