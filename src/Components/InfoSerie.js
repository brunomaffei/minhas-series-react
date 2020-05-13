import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Badge, FormGroup, Label, Input } from 'reactstrap'

const InfoSerie = ({ match }) => {
  const [form, setForm] = useState({})
  const [sucess, setSucess] = useState(false)
  const [mode, setMode] = useState('EDIT')
  const [genres, setGenres] = useState([])

  const [data, setData] = useState({})
  useEffect(() => {
    axios
    .get('/api/series/' + match.params.id)
    .then(res => {
      setData(res.data)
      setForm(res.data)
    })
  }, [match.params.id])
  useEffect(() =>{
    axios
    .get('/api/genres')
    .then(res=>{
      setGenres(res.data.data)
    })
  },[])

  // custom Header

  const masterHeader = {
    height: '50vh',
    minHeight: '500px',
    backgroundImage: `url('${data.background}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }

  const onChange = field => evt => {
    setForm({
      ...form,
      [field]: evt.target.value})
  }

  const save = () => {
    axios
      .put('/api/series/' + match.params.id, form)
      .then(res => {
        setSucess(true)
      })
  }

  if (sucess) {
    //return <Redirect to='/series' />
  }

  return (
    <div>
      <header style={masterHeader}>
        <div className='h-100' style={{ background: 'rgba(0,0,0,0.7)' }}>
          <div className='h-100 container'>
            <div className='row h-100 align-items-center'>
            <div className='col-3'>
              <img alt={data.name} className='img-fluid img-thumbnail' src={data.poster} />
            </div>
            <div className='col-8'>
            <h1 className='font-weight-light text-white'>{data.name}</h1>
            <div className='lead text-white'>
            <Badge color='success'>Assistir</Badge>
             <Badge color='warning'>Assitido</Badge>
             Genero: {data.genre}
            </div>
            </div>
          </div>
        </div>
        </div>
      </header>
      <div>
       <button className='btn btn-primary'onClick={() => setMode('EDIT')}>Editar</button>
      </div>
      {
        mode === 'EDIT' &&
      <div className='container'>
        <h1>Nova Série</h1>
        <button className='btn btn-primary' onClick={() => setMode('INFO')}>Cancelar Edição</button>
        <form>
          <div className='form-group'>
            <input
              type='text'
              value={form.name}
              onChange={onChange('name')}
              className='form-control'
              id='name'
              placeholder='nome da série'
            />
          </div>
          <div className='form-group'>
          <label>Comentários</label>
          <input
            type='text'
            value={form.comments}
            onChange={onChange('comments')}
            className='form-control'
            id='name'
            placeholder='nome da série'
          />
        </div>
        <FormGroup>
        <Label for='exampleSelect'>Gênero</Label>
        <Input type='select' name='select' onChange={onChange('genre')}>
        { genres.map(genre => <option key={genre.id} value={genre.id} selected={genre.id === form.genre}>{genre.name}</option>)}
        </Input>
      </FormGroup>
          <button type='button' onClick={save} className='btn btn-primary'>
            Salvar
          </button>
        </form>
      </div>
      }
    </div>
  )
}

export default InfoSerie
