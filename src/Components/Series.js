import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../Styles/styles.css'

export default function Series () {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
    .get('/api/series')
    .then(res => {
      setData(res.data.data)
    })
  }, [])

  console.log(data)

  const deleteSerie = id =>{
    axios
    .delete('/api/series/' + id)
    .then(res => {
      const filtrado = data.filter(item => item.id !== id)
      setData(filtrado)
    })
  }

  const renderizalinha = record => {
    return (
      <tr key={record.id}>
        <th scope='row'>{record.id}</th>
        <td>{record.name}</td>
        <td>
          <button style={{marginRight:"20px"}} className="btn btn-danger" onClick={() => deleteSerie(record.id)}>Remover</button>
          <Link to={'/series/' + record.id}  className="btn btn-danger" >Editar</Link>
          </td>
      </tr>
    )
  }

  if (data.length === 0) {
    return (
      <div className='container'>
        <h1>Séries</h1>
        <div className='alert alert-warning' role='alert'>
          Você não possui genêros criados ainda.
        </div>
      </div>
    )
  }


  return (
    <div className='container'>
      <h1 style={{textAlign: "center"}} className="h1Under">Séries</h1>
      <br></br>
      <div className="formBtn">
      <Link style={{marginBottom:"30px"}} className="btn btn-primary" to='/generos/novo'>Novo Série</Link>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>NOME</th>
            <th scope='col'>AÇÕES</th>
          </tr>
        </thead>
        <tbody>{data.map(renderizalinha)}</tbody>
      </table>
    </div>
    </div>
  )
}