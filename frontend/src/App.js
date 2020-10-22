import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import BandIndex from './components/projects/BandIndex'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/bands' component={BandIndex}/>
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
