// src/index.js (or src/main.jsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Provider } from 'react-redux';
import "./index.css";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import { persistor, store } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import SignIn from './components/Signin/Signin';
import SignUp from './components/Signin/Signup';
import ATMPanel from './components/AtmPanel/ATMPanel';
import AdminPanel from './components/AdminPanel/AdminPanel';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      
      {
        path: 'sign-in',
        element: <SignIn />
      },
      
      {
        path: 'sign-up',
        element: <SignUp />
      },
      {
        path: 'atm',
        element: <ATMPanel />
      },
      {
        path: 'admin',
        element: <AdminPanel />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'contact',
        element: <Contact />
      },

      
     
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
