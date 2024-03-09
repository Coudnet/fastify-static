import { useState } from 'react'

import itmoLogo from './assets/itmo-logo-dark.svg';
import yaLogo from './assets/ya-logo.svg';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="https://itmo.ru/" target="_blank" style={{marginTop: '-16px'}}>
          <img src={itmoLogo} className="logo" alt="Itmo logo" />
        </a>
        <span style={{ fontSize: '60px' }}>+</span>
        <a href="https://ya.ru/" target="_blank">
          <img src={yaLogo} className="logo" alt="Ya logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
