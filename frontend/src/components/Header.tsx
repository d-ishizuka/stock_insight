import React from 'react';
import styles from './Header.module.css';
import { AppBar, Toolbar, Button } from '@mui/material';

export const Header = () => {
  return (
    <div className="header">
      <AppBar>
        <Toolbar>
            <div className={styles.headerTitle}>
              Stock Insight
            </div>
          <Button color="inherit" href="#">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
};
