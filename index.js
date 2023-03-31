import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"
import { StateProvider } from './Stateprovider';
import reducer, { initialState } from './reducer';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  <StateProvider initialState={initialState} reducer={reducer}>
<BrowserRouter>

    <App />
</BrowserRouter>

  </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

