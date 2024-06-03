import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Regform1 } from './Regform1';
// import { Regform } from './Regform';
// import { UserDetails } from './UserDetails';
// import { Cart } from './Cart';
// import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*
        <App />
        <Cart />
        <UserDetails/>
        <Regform />
     */}
     <Regform1/>
  </React.StrictMode>
);

