import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/navigation/Home';
import About from './components/navigation/About';
import Login from './components/navigation/Login';
import Customer from './components/navigation/Customer';
import Nav from './components/navigation/Nav';
import Display from './components/navigation/Display';


export default function App() {
  return (
    <div>
      <Routes>
    
        <Route path="/" element={<Nav />} />
       <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="customer" element={<Customer />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </div>
  );
}
