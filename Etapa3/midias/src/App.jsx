import { useState } from 'react'
import banner1 from './assets/img/1.png'
import BannerControle from './components/BannerControle'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const w=600, h=240
  return (
    <>
    <div>
      <nav>
        Cabeçalho
      </nav>
      <div>
        <img src={banner1} alt="Banner Anuncio" width={w} height={h}/>
      </div>
      <div>
        <BannerControle />
      </div>
    </div>
    </>
  )
}

export default App
