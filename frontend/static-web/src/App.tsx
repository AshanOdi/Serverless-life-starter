import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter-card">
      <h1>Counter</h1>
      <p className="count-value">{count}</p>
      <div className="button-row">
        <button type="button" onClick={() => setCount((c) => c - 1)}>
          Decrease
        </button>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          Increase
        </button>
      </div>
    </div>
  )
}

export default App
