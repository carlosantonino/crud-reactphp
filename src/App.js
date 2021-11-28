import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {

  const [data, setData]= useState([]);
  const getProdutos = async () => {
    fetch("http://localhost/celke/index.php")
    .then((response)=>response.json())
    .then((responseJson)=>(
      // console.log(responseJson),
      setData(responseJson.records)
    ));
  }

  useEffect(()=>{
    getProdutos();
  },[])
  return (
    <div>
      <h1>Listar</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Título</th>
            <th scope="col">Descrição</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map(produto => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.titulo}</td>
              <td>{produto.descricao}</td>
              <td>Visualizar | Editar | Apagar</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}


