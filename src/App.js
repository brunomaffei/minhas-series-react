import React, {useState, useEffect} from 'react'
import Header from './Components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Components/Home'
import Generos from './Components/Generos'
import axios from 'axios'

function App () {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data)
    })
  }, [])
  return (
    <Router>
    <div>
      <Header/>
          <Route exact path='/' component={Home} />
          <Route path='/generos' component={Generos} />
        <pre>{JSON.stringify(data)}</pre>
          </div>
    </Router>
  )
}

export default App
