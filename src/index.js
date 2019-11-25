import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'typeface-roboto';

import { createStore, StoreProvider } from 'easy-peasy';
import { model } from './model'

const store = createStore(model);

ReactDOM.render(
    <StoreProvider store={store}>
        <App />
    </StoreProvider>
    , document.getElementById('root'));
