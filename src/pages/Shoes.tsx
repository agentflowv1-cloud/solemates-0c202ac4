import React, { useState } from 'react';
import shoesData from '../data/shoes.json';
import { Link } from 'react-router-dom';

function Shoes() {
  const [shoes, setShoes] = useState(shoesData);
  const [filteredShoes, setFilteredShoes] = useState(shoesData);
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    const filtered = shoesData.filter((shoe) => shoe.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilteredShoes(filtered);
  };

  return (
    <div>
      <h1>Shoes</h1>
      <input type="text" value={filter} onChange={handleFilterChange} placeholder="Search shoes" />
      <ul>
        {filteredShoes.map((shoe) => (
          <li key={shoe.id}>{shoe.name}
            <p><Link to="/">Back to Home</Link></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shoes;