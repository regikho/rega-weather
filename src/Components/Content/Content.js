import React from 'react';

import CurrentContainer from '../CurrentContainer/CurrentContainer';
import WeekContainer from '../WeekContainer/WeekContainer';
import classes from './Content.module.css';

function Content(props) {
  return (
    <div className={classes.content}>
        <CurrentContainer 
          weekDay={props.weekDay}
          date={props.date}
          location={props.location}
          temp={props.temp}
          feelsLike={props.feelsLike}
          description={props.description}
          humidity={props.humidity}
          wind={props.wind}
          pressure={props.pressure}
          icon={props.icon}
        />
        <WeekContainer daily={props.daily} />
    </div>
  );
}

export default Content;