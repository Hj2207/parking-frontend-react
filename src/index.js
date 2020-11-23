
import React from "react";
import ReactDOM from "react-dom";
/* import { createBrowserHistory } from "history"; */
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import {store,persistor} from './redux/store';
import App from './App'
import "assets/css/material-dashboard-react.css?v=1.9.0";

/* const hist = createBrowserHistory(); */

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor={persistor}>
      <App /> 
    </PersistGate>
    </BrowserRouter>
</Provider>,
  document.getElementById("root")
);
