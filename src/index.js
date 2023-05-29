import React from 'react';
import ReactDOM from "react-dom/client";
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider  store={store}> 
    <BrowserRouter>
     <App />
    </BrowserRouter>
   
  </Provider>,
  document.getElementById("root")
  
);


reportWebVitals();
