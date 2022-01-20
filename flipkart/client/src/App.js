import {React, useState} from "react";

import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Cart from './components/cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginDilog from './components/login/Login';

function App() {

  const [open, setopen] = useState(false)

  const openLoginDilog = ()=>{
    open?setopen(false):setopen(true)
  }

  return (
    <BrowserRouter>
        <LoginDilog open={open}  setopen={openLoginDilog}/>
      <Header setopen={openLoginDilog}/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
