import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Addcontact from './Addcontact';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Navbar />
          <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/add-contact" component={Addcontact}/>
          </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
