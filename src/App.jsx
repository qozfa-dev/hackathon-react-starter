import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import './App.css';
import Home from './pages/Home';
import Events from './pages/Events';
import Profile from './pages/Profile';
import Navbar from './components/Navbar.jsx';

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App
