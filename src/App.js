import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenue à l'école Hexagone !
        </p>
        <p>{count}</p>
        <ClickCounter onCounterClick={() => setCount(count + 1)} text="Mon premier bouton" />

        <ClickCounter onCounterClick={() => setCount(count + 1)} text="Mon second bouton" />
      </header>
    </div>
  );
}