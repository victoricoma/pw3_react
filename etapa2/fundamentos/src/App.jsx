// component
import FirstCompoment from './components/FirstCompoment'
// base do React
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>Barra de Navegação</nav>
    <FirstCompoment />
    </>
  )
}

export default App
