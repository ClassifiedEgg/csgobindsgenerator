import React, { useEffect } from 'react';
import { createMuiTheme, MuiThemeProvider, createGenerateClassName } from '@material-ui/core/styles';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { JssProvider } from 'react-jss';
import Header from './components/Header';
import Guns from './components/Guns';
import DisplayBinds from './components/DisplayBinds';
import Utility from './components/Utility';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Grid, useMediaQuery } from '@material-ui/core';
import './App.css';

const App = () => {

  useEffect(() => {
    isThemeLight ? setTheme('light') : setTheme('dark');
  }, [])

  const themeMode = useStoreState(state => state.theme);
  const setTheme = useStoreActions(actions => actions.themeInit);
  const isThemeLight = useMediaQuery('(prefers-color-scheme: light)');

  const generateClassName = createGenerateClassName();

  const theme = createMuiTheme({
    palette: {
      type: themeMode
    }
  });

  return (
    <JssProvider generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Guns />
        <Grid container>
          <DisplayBinds />
          <Utility />
        </Grid>
      </MuiThemeProvider>
    </JssProvider>
  )
}

export default App;