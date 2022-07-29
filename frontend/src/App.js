import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import { BrowserRouter, Link, Navigate, NavLink, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Home/>} path="home"/>
        <Route element={<Login/>} path="login"/>
        <Route element={<Signup/>} path="register"/>
        
      </Routes>
      </BrowserRouter>
        </div>
  )
}

export default App;