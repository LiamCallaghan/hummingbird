import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Info from './components/common/Info'

import Register from './components/user/Register'
import Login from './components/user/Login'
import ProfilePage from './components/user/ProfilePage'

import BandIndex from './components/projects/BandIndex'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Info}/>
        <Route path='/profile' component={ProfilePage} />
        <Route path='/bands' component={BandIndex}/>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  )
}
// class App extends React.Component {
//   async componentDidMount() {
//     try {
//       const response = await fetch('/api/bands')
//       const data = await response.json()
//       console.log(data)
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   render() {
//     return null
//   }
// }

export default App
