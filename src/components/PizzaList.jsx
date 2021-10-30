import React, { useState, useEffect } from 'react';
import { createServer } from 'miragejs';

export default function PizzaList() {
  let server = createServer();
  server.get('/api/pizzas', { pizzas: [{id: 1, name: 'Pepperoni'}]});

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const data = fetch('/api/pizzas')
      .then(res => res.json())
      .then(json => {
        setPizzas(json.pizzas)
      });
  }, []);

  return (
    <>
      <h2>Pizzas from Mirage</h2>
      <ul>
        {pizzas.map(pizza => (
          <li key={pizza.id}>{pizza.name}</li>
        ))}
      </ul>
    </>
  );
}
