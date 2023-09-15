import { useState } from 'react'
import banner2 from '../assets/img/5.png'

const AppTamanhoImagem = () => {   

    const [Altura, setAltura] = useState(600)
    const [Largura, setLargura] = useState(240)

    return(
        <div>
            <img src={banner2} alt="Banner de Promoção 2" width={Altura} height={Largura}/>
            <div>
                <span>Largura: {Altura}</span> || <span>Altura: {Largura}</span>
            </div>
            <div>
            <button onClick={() => setLargura(Largura + 20)}> Altura</button>
            <button onClick={() => setAltura(Altura - 20)}> Diminuir Largura</button>
            <button onClick={() => setAltura(Altura + 20)}> Largura</button>
            <button onClick={() => setLargura(Largura - 20)}> Diminuir Altura</button>
            </div>
        </div>        
    )

}
export default AppTamanhoImagem;