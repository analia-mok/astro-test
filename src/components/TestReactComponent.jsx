import React, { useState } from 'react';

export default function TestReactComponent({ count: initialCount }) {
  const [count, setCount] = useState(initialCount);
  const add = () => setCount(i => i + 1);
  const subtract = () => setCount(i => i - 1);

  return (
    <>
      <h2>I am a react component</h2>
      <strong>{count}</strong>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
    </>
  );
}
