const TerceiroComponente = () => {
    const professor ={
        nome: "Victor Icoma",
        area: "Tecnologia da Informação",
        formacao: "Ciencias da Computação",
        titular: true
    }

    return(
        <div>
            <strong>Nome: </strong>{professor.nome}<br />
            <strong>Área: </strong>{professor.area}<br />
            <strong>Fomração: </strong>{professor.formacao}<br />
            <strong>Matriculado: </strong>{professor.titular ? 'Sim' : 'Não'}<br />
        </div>
    );
}

export default TerceiroComponente;