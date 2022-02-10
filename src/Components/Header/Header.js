import React from 'react';

import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>rega weather</h1>
      <input
        className={classes['search-input']}
        placeholder="Введите населенный пункт"
      />
    </header>
  );
}

export default Header;