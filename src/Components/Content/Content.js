import React from 'react';

import CurrentContainer from '../CurrentContainer/CurrentContainer';
import classes from './Content.module.css';

function Content() {
  return (
    <div className={classes.content}>
        <CurrentContainer />
        <h1>body</h1>
    </div>
  );
}

export default Content;