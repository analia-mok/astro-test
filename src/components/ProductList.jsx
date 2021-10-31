import React, {useState, useEffect} from 'react';
import { makeServer } from '../mirage';

export default function ProductList() {
  const environment = 'development';
  makeServer({ environment });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json.products)
      });
  }, []);

  return (
    <>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <ul style={{
          display: 'flex',
          flexFlow: 'row wrap',
          listStyleType: 'none',
          margin: 0,
          padding: 0,
          width: '100%'
        }}>
          {products.map(product => (
            <li key={product.id} style={{
              flex: '0 1 25%',
              width: '33%',
              margin: '0 20px 20px'
            }}>
              <article>
                <img src={product.thumbnail} alt={product.name} style={{ display: 'block', width: '100%', height: 'auto' }} />
                <h2>{product.name}</h2>
                <span>${product.price}</span>
                <div>
                  {product.description}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}