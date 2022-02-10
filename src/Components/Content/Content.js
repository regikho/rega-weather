import React from 'react';
import CurrentContainer from '../CurrentContainer/CurrentContainer';
import Header from '../Header/Header';

import classes from './Content.module.css';

function Content() {
  return (
    <div className={classes.content}>
        <Header />
        <CurrentContainer />
        <h1>body</h1>
    </div>
  );
}

export default Content;