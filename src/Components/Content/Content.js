import React from 'react';

import CurrentContainer from '../CurrentContainer/CurrentContainer';
import WeekContainer from '../WeekContainer/WeekContainer';
import classes from './Content.module.css';

function Content(props) {
  return (
    <div className={classes.content}>
        <CurrentContainer 
          state={props.state}
        />
        {/* <WeekContainer 
          state={props.state}
        /> */}
    </div>
  );
}

export default Content;