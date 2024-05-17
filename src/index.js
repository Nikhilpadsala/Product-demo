import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProductDetail from './features/products/ProductDetail';
import Login from './features/products/Login';
import Dashboard from './features/products/Dashbord';

const container = document.getElementById('root');
const root = createRoot(container);
const token = localStorage.getItem("token")
root.render(
  
    <Provider store={store}>
         <BrowserRouter>
         <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/login' element={ <Login />} />
          <Route path="/user/dashboard" element={token ? <Dashboard /> : <Navigate to={"/"} />} />
          <Route path="/product/:productId" element={< ProductDetail/>}/>
        <Route path='*' element={<h1> 404 page not found</h1>} />
         </Routes>
         </BrowserRouter>    
    </Provider>

);


reportWebVitals();
