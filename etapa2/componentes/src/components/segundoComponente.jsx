import terceiroComponente from "./terceiroComponente";
const segundoComponente = () => {
    const aluno = {
        nome: "Victor Sena Icoma",
        profissao: "Desenvolvedor",
        idade: 41,
        casado: true
    }
    return (
        <>
            <p>
                <h3>Aluno</h3>
                <strong>Nome: </strong>{aluno.nome} <br />
                <strong>Profissão: </strong>{aluno.profissao} <br />
                <strong>Idade: </strong>{aluno.idade} <br />
                <strong>Casado: </strong>{aluno.casado} <br />
            </p>
            <p>
                <terceiroComponente />
            </p>
        </>
    );
}

export default segundoComponente;