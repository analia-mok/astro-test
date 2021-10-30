import React, { useState, useEffect } from 'react';
import { makeServer } from '../mirage/index.js';

export default function PizzaList() {
  const environment = 'test';
  makeServer({environment});

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('/api/pizzas')
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
