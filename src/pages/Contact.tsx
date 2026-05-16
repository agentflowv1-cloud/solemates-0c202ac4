import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h1>Get in Touch</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
      <p><Link to="/">Back to Home</Link></p>
    </div>
  );
}

export default Contact;