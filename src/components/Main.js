import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './routes/root/Home'
import Test from './routes/root/Test'
import Results from './routes/root/Results'
import About from './routes/root/About'
import Contact from './routes/root/Contact'

const Main = () => (
  <div className="Main">
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/test' component={ Test } />
      <Route path='/results' component={ Results } />
      <Route path='/about' component={ About } />
      <Route path='/contact' component={ Contact } />
    </Switch>
  </div>
)

export default Main 