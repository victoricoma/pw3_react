import React, {useState} from 'react'
const GestorDados = () => {
    let somaNumero = 10
    
    const [numero, setNumero] = useState(15)

    console.log(numero)
    return(
        <div>
            <p>
                Valor da soma: {somaNumero}.
            </p>
            <button onClick={() => (somaNumero = 15)}>Muda Valor</button>
            <p>
                Valor de Hook: {numero}
            </p>
            <button onClick={() => setNumero(25)}> Muda Por Hook</button>
        </div>
    )
}

export default GestorDados