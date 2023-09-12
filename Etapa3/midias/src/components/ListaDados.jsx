import React, {useState} from 'react'
const ListaDados = () => {
    const [User, setUser] = useState([
        {id: 1, nome: 'João Pedro', idade: 18},
        {id: 2, nome: 'Kamily Simeão', idade: 18},
        {id: 3, nome: 'Gustavo Dias Rodrigues', idade: 17},
        {id: 4, nome: 'Gustavo Campi', idade: 50},
        {id: 5, nome: 'Davi Ozan Alves', idade: 48},
        {id: 6, nome: 'Fabio Zirondi', idade: 17},
        {id: 7, nome: 'Olga Marinha', idade: 34},
        {id: 8, nome: 'Marilia Gabriela', idade: 30},
    ])

    const apagarUsuario = () => {
        const aleatorio = Math.floor(Math.random() * User.length)

        setUser((prev) => {
            console.log(prev)
            return prev.filter((itemUser) => aleatorio !== User.id)
        })
    }

    return (
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>nome</th>
                    <th>idade</th>
                </tr>
                {User.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.idade}</td>
                    </tr>                    
                    ))}
            </table>
            <div>
                <button onClick={apagarUsuario}>Elimina Usuario Aleatorio</button>
            </div>
        </div>
    )
}
export default ListaDados