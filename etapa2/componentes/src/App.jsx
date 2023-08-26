import { useState } from 'react'
import primeiroComponente from './components/primeiroComponente'
import segundoComponente from './components/segundoComponente'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Home Principal</h1>
    <primeiroComponente />
    </>
  )
}

export default App
