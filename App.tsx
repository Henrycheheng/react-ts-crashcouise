import * as React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

export default function App(props: any) {
  const [count, setCount] = useState(-1);

  useEffect(() => {
    setCount(0);
  });
  console.log('render');
  return (
    <div>
      <h1>App</h1>
      <button>{count}</button>
    </div>
  );
}
