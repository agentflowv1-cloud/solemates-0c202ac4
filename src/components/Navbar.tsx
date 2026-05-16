import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 bg-gray-100">
      <div className="flex items-center">
        <img src="https://via.placeholder.com/150" alt="Logo" className="w-12 h-12" />
        <h1 className="text-2xl font-bold ml-4">SoleMates</h1>
      </div>
      <ul className="flex items-center space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;