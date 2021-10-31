import React, { useState, useEffect } from 'react';
import { makeServer } from '../mirage/index.js';

export default function VehicleList() {
  const environment = 'development';
  const server = makeServer({ environment });

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch('/api/vehicles')
      .then(res => res.json())
      .then(json => {
        setVehicles(json.vehicles)
      });
  }, []);

  return (
    <>
      <h2>Vehicles from Mirage</h2>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>
            <h3>{vehicle.name}</h3>
            <img src={vehicle.image} alt={vehicle.name} />
            <dl>
              <dt>Manufacturer</dt>
              <dd>{vehicle.manufacturer}</dd>
              <dt>Model</dt>
              <dd>{vehicle.model}</dd>
              <dt>Type</dt>
              <dd>{vehicle.type}</dd>
              <dt>Fuel</dt>
              <dd>{vehicle.fuel}</dd>
              <dt>VIN</dt>
              <dd>{vehicle.vin}</dd>
              <dt>Color</dt>
              <dd>{vehicle.color}</dd>
              <dt>VRM</dt>
              <dd>{vehicle.vrm}</dd>
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}
