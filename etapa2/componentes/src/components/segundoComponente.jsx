const SegundoComponente = () => {
    const aluno = {
        nome: 'João',
        idade: 16,
        curso: 'Informática',
        cidade: 'São Paulo',
        estado: 'SP',
        pais: 'Brasil',
        matriculado: true
    }
    return(
        <div>
            <strong>Nome: </strong>{aluno.nome}<br />
            <strong>Idade: </strong>{aluno.idade}<br />
            <strong>Curso: </strong>{aluno.curso}<br />
            <strong>Cidade: </strong>{aluno.cidade}<br />
            <strong>Estado: </strong>{aluno.estado}<br />
            <strong>País: </strong>{aluno.pais}<br />
            <strong>Matriculado: </strong>{aluno.matriculado ? 'Sim' : 'Não'}<br />
        </div>
    );
}

export default SegundoComponente;