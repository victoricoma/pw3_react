import { useState } from "react"

const ListaDados = () =>{
    const [user, setUser] = useState([
        {id: 1, nome:'Astolfo Roberto Caruzo', idade: 32},
        {id: 2, nome:'Roberto Dinis SIlva', idade: 24},
        {id: 3, nome:'Mizael Pereira', idade: 32},
        {id: 4, nome:'Gustavo Turco Dijalma Alvaz Herculio', idade: 36},
        {id: 5, nome:'Ruan Albert Tabolka', idade: 25},
        {id: 6, nome:'João Pedro Zirondi', idade: 19},
        {id: 7, nome:'Marcos Pereira Gustin', idade: 42},
        {id: 8, nome:'Wellington Washigton Walter', idade: 23}
    ])

    const apagarUsuario = () => {
        const aleatorio = Math.floor(Math.random() * user.length)
        console.log(aleatorio)

        setUser((prev) => {
            console.log(prev)
            return prev.filter((user) => aleatorio !== user.id)
        })
    }

    return(
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>nome</th>
                    <th>Idade</th>
                </tr>
                {user.map((tableItem) =>(
                    <tr key={tableItem.id}>
                        <td>{tableItem.id}</td>
                        <td>{tableItem.nome}</td>
                        <td>{tableItem.idade}</td>
                    </tr>
                ))}
            </table>
            <div>
                <button onClick={apagarUsuario}>Elimina Usuario Aleatório</button>
            </div>
        </div>
    )
}

export default ListaDados