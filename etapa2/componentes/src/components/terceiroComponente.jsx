const terceiroComponente = () => {
    const professor = {
        nome:"Eduardo Gustavo Gonçalves",
        curso:"Desenvolvimento de Sistemas",
        formacao:"Analista de Sistemas",
        idade:"45",
        titular: true
    }
    return (
        <p>
            <h3>Professor</h3>
            <strong>Nome: </strong>{professor.nome} <br />
            <strong>Curso: </strong>{professor.curso} <br />
            <strong>Formação: </strong>{professor.formacao} <br />
            <strong>Idade: </strong>{professor.idade} <br />
            <strong>Titular: </strong>{professor.titular} <br />
        </p>
    );
}

export default terceiroComponente;