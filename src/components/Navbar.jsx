import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/events" style={{ color: 'white', textDecoration: 'none' }}>Events</Link></li>
        <li><Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;
