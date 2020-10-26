import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Info from './components/common/Info'

import Register from './components/user/Register'
import Login from './components/user/Login'
import ProfilePage from './components/user/ProfilePage'

import BandIndex from './components/projects/BandIndex'
import BandPage from './components/projects/BandPage'
import BandNew from './components/projects/BandNew'

import ChatPage from './components/interaction/ChatPage'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Info}/>
        <Route path='/profile' component={ProfilePage} />
        <Route exact path='/bands/' component={BandNew}/>
        <Route path='/bands/:id' component={BandPage}/>
        <Route path='/bandslist' component={BandIndex}/>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/chat' component={ChatPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
