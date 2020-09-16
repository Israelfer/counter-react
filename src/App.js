import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
    if (count < 0) {
      setCount(0)
    }
  return (
    <div className="App">
        <h1>{count}</h1>

        <div>
          <button className="btnCounter" onClick={() => setCount(count + 1)}>+</button>
          <button className="btnCounter" onClick={() => setCount(count - 1)}>-</button>
          <div>
            <button className="btnBottom" onClick={() => setCount(0)}>Reset</button>
            <button className="btnBottom" onClick={() => setCount(Math.floor(Math.random() * 2020))}>Aleatório</button>
          </div>
          
        </div>
    </div>
  );
}

export default App;
