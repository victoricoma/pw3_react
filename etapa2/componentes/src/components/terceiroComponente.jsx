const TerceiroComponente = () => {
    const professor ={
        nome: "Victor Icoma",
        area: "Tecnologia da Informação",
        formacao: "Ciencias da Computação",
        titular: true
    }
    const renderizacaoprof = (x) => {
        if (x) {
            return<h1>Titular</h1>
        }else{
            return<h1>Substituto</h1>
        }   
    }
    return(
        <div>
            <strong>Nome: </strong>{professor.nome}<br />
            <strong>Área: </strong>{professor.area}<br />
            <strong>Fomração: </strong>{professor.formacao}<br />
            <strong>Matriculado: </strong>{professor.titular ? 'Sim' : 'Não'}<br />
            <div>
                {renderizacaoprof(professor.titular)}
            </div>
        </div>
    );
}

export default TerceiroComponente;