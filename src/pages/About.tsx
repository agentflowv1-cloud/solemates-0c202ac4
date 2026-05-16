import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
      <p><Link to="/">Back to Home</Link></p>
    </div>
  );
}

export default About;