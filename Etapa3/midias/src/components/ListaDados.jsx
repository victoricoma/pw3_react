import React, { useState } from 'react';

const ListaDados = () => {
    const [users, setUsers] = useState([
        { id: 1, nome: 'João Pedro', idade: 18 },
        { id: 2, nome: 'Kamily Simeão', idade: 18 },
        { id: 3, nome: 'Gustavo Dias Rodrigues', idade: 17 },
        { id: 4, nome: 'Gustavo Campi', idade: 50 },
        { id: 5, nome: 'Davi Ozan Alves', idade: 48 },
        { id: 6, nome: 'Fabio Zirondi', idade: 17 },
        { id: 7, nome: 'Olga Marinha', idade: 34 },
        { id: 8, nome: 'Marilia Gabriela', idade: 30 },
    ]);

    const apagarUsuario = () => {
        const aleatorio = Math.floor(Math.random() * users.length);

        setUsers((prevUsers) => {
            const newUsers = prevUsers.filter((itemUser) => itemUser.id !== aleatorio + 1); // +1 para corresponder ao ID
            return newUsers;
        });
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>idade</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.idade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={apagarUsuario}>Eliminar Usuário Aleatório</button>
            </div>
        </div>
    );
};

export default ListaDados;
