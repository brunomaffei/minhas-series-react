import React from 'react'
import Header from './Components/Header'
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Home from './Components/Home'
import Generos from './Components/Generos'
import NovoGenero from './Components/NovoGenero'
import EditarGenero from './Components/EditarGenero'
import Series from './Components/Series'
import NovaSerie from './Components/NovaSerie'
import InfoSerie from './Components/InfoSerie'

function App () {
  return (
    <Router>
    <div>
      <Header/>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/generos' exact component={Generos} />
          <Route path='/generos/novo' exact component={NovoGenero} />
          <Route path='/generos/:id' exact component={EditarGenero} />
          <Route path='/series' exact component={Series} />
          <Route path='/series/novo' exact component={NovaSerie} />
          <Route path='/series/:id' exact component={InfoSerie} />
          </Switch>
          </div>
    </Router>
  )
}

export default App
