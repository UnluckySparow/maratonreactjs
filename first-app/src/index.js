import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Appcontext from './Appcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const user = {name : "Mouad" , email:"mouad@gmail.com", password:"apahtfo3lik"}
root.render(
  <React.StrictMode>
    <Appcontext.Provider value={user}>
    <App />
    </Appcontext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
