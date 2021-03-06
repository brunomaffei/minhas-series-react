import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../Styles/styles.css'

export default function Generos () {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('/api/genres/').then(res => {
      setData(res.data.data)
    })
  }, [])

  const deleteGenero = id =>{
    axios
    .delete('/api/genres/' + id)
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
          <button style={{marginRight:"20px"}} className="btn btn-danger" onClick={() => deleteGenero(record.id)}>Remover</button>
          <Link className="btn btn-danger" to={'/generos/' + record.id}>Editar</Link>
          </td>
      </tr>
    )
  }

  if (data.length === 0) {
    return (
      <div className='container'>
        <h1>Generos</h1>
        <div className='alert alert-warning' role='alert'>
          Você não possui genêros criados ainda.
        </div>
      </div>
    )
  }


  return (
    <div className='container'>
      <h1 className="h1Under">Genêros</h1>
      <br></br>
      <div className="formBtn">
      <Link style={{marginBottom:"30px"}} className="btn btn-primary" to='/generos/novo'>Novo genêro</Link>
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