import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Shoes() {
  const [shoes, setShoes] = useState([]);
  const [filteredShoes, setFilteredShoes] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('https://example.com/shoes')
      .then(response => {
        setShoes(response.data);
        setFilteredShoes(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    const filtered = shoes.filter(shoe => shoe.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilteredShoes(filtered);
  };

  return (
    <div>
      <h1>Shoes</h1>
      <input type="text" value={filter} onChange={handleFilterChange} placeholder="Search shoes" />
      <ul>
        {filteredShoes.map(shoe => (
          <li key={shoe.id}>{shoe.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Shoes;