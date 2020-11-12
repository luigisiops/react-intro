import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GifsAdd from './components/add-gifs'
import Login from './components/login'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route component = {App} path = "/" exact/>
        <Route component = {GifsAdd} path = "/favorites-list"/>
        <Route component = {Login} path = "/login"/>
      </Switch>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
