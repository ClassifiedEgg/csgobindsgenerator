import React from 'react';
import Header from './components/Header';
import Guns from './components/Guns';
import DisplayBinds from './components/DisplayBinds';
import Utility from './components/Utility';

import { Grid, Box, Typography } from '@material-ui/core';
import './App.css';

const App = () =>
  <div>
    <Header />
    <Guns />
    <Grid container >
      <DisplayBinds />
      <Utility />
    </Grid>
  </div>

export default App;