import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { TNPSC_Counter } from './TNPSC_Counter';
// import { Regform1 } from './Regform1';
// import { Advise } from './Adrvise_App/Advise';
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
        <Regform1/>
        <Advise/>
     */}
     <TNPSC_Counter/>
  </React.StrictMode>
);

