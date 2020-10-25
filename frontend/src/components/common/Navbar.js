import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { logout, isAuthenticated } from '../../lib/auth'

class Navbar extends React.Component {

  // state = {
  //   user: null
  // }

  // componentDidMount = async () => {
  //   const user
  // }

  handleLogout = () => {
    logout()
  }

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
          { !isAuthenticated() && <Link to='/register' >Register</Link>}
        </div>
        <div>
          { !isAuthenticated() && <Link to='/login' >Login</Link>}
        </div>
        <div>
          { isAuthenticated() && <Link to='/profile' >Profile</Link>}
        </div>
        <div>
          { isAuthenticated() && <Link to='/' onClick={this.handleLogout}>Log out</Link>}
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)