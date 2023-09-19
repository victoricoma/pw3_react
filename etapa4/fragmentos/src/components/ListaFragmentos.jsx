const ListaFragmentos = (listaMotos) => {
  return (
    <>
    <table>
        <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>KM</th>
            <th>Usado</th>
            <th>Ano</th>
        </tr>
        {/*listaMotos.map((itemMoto)=> {
            <tr key={itemMoto.id}>
                <td>{itemMoto.marca}</td>
                <td>{itemMoto.modelo}</td>
                <td>{itemMoto.km}</td>
                <td>{itemMoto.usado ? "Sim" : "Não"}</td>
                <td>{itemMoto.ano}</td>
            </tr>
        })*/}
    </table>
    <div>
        {listaMotos[0].marca}
    </div>
    </>
  )
}

export default ListaFragmentos