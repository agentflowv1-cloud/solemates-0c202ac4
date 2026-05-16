import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to our store</h1>
      <p>
        <Link to="/checkout">Proceed to checkout</Link>
      </p>
    </div>
  );
}

export default Home;