import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UdayReact from './ud';

function App() {
  const [kodnest, setKodnest] = useState<number>(0)
  return (
    <div>
      <p>mishra</p>
      <UdayReact
        kodnest={kodnest}
        setKodnest={setKodnest}

      />

    </div>
  );
}

export default App;
