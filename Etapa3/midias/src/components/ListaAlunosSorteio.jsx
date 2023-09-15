import React, { useState } from 'react'
const ListaAlunosSorteio = () => {
    const [alunos, setAlunos] = useState([
        { id: 1, nome: 'João Pedro', idade: 18 },
        { id: 2, nome: 'Kamily Simeão', idade: 18 },
        { id: 3, nome: 'Gustavo Dias Rodrigues', idade: 17 },
        { id: 4, nome: 'Gustavo Campi', idade: 50 },
        { id: 5, nome: 'Davi Ozan Alves', idade: 48 },
        { id: 6, nome: 'Fabio Zirondi', idade: 17 },
        { id: 7, nome: 'Olga Marinha', idade: 34 },
        { id: 8, nome: 'Marilia Gabriela', idade: 30 },
        { id: 9, nome: 'Icoma Chan', idade: 40 },
        { id: 10, nome: 'Gil fofinha', idade: 37 },
        { id: 11, nome: 'Gabruel', idade: 22 },
        { id: 12, nome: 'junior campos', idade: 30 },
        { id: 13, nome: 'Marcio Donato', idade: 34 },
        { id: 14, nome: 'Eduardo Lopes', idade: 69 },
        { id: 15, nome: 'leonardo Silvera', idade: 34 },
        { id: 16, nome: 'Jonas Moraes', idade: 54 },
        { id: 17, nome: 'Maria Gabriela', idade: 40 },
        { id: 18, nome: 'Gabriela nunes', idade: 23 },
        { id: 19, nome: 'Jeraldo carlos', idade: 31 },
        { id: 20, nome: 'Joao pedro gomes', idade: 32 },
    ])

    const ArmazenarAlunos = () => {
        const aleatorio = Math.floor(Math.random() * alunos.length)

        setAlunos((prevAlunos) => {
            console.log(prevAlunos)
            return prevAlunos.filter((alunos) => aleatorio !== alunos.id);
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
                {alunos.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.idade}</td>
                    </tr>
                ))}
            </table>
            <div>
                <button onClick={ArmazenarAlunos}>Sorteia um aluno aleatorio</button>
            </div>
        </div>
    )
}
export default ListaAlunosSorteio