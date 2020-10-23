import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {

  // state = {
  //   user: null
  // }

  // componentDidMount = async () => {
  //   const user
  // }

  render() {
    return (
      <nav className='navbar is-dark'>
        <div>
          <Link to='/' >Info</Link>
        </div>
        <div>
          <Link to='/bands' >Bands</Link>
        </div>
        <div>
          <Link to='/register' >Register</Link>
        </div>
        <div>
          <Link to='/login' >Login</Link>
          {/* <Link to='/users/' >Profile</Link> */}
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)