import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { logout, isAuthenticated } from '../../lib/auth'

class Navbar extends React.Component {

  handleLogout = () => {
    logout()
  }

  render() {
    return (
      <nav className='navbar is-dark'>
        <div className='navbar-brand'>
          <Link to='/' className='nav-item'><img src="https://i.imgur.com/cL7tCLa.png" width="70" height='100' alt="Logo" /></Link>
          <Link to='/bandslist' className='nav-item'>Bands</Link>
        </div>
        <div className='navbar-end'>
          { !isAuthenticated() && <Link to='/register' className='nav-item'>Register</Link>}
          { !isAuthenticated() && <Link to='/login' className='nav-item'>Login</Link>}
          { isAuthenticated() && <Link to='/profile' className='nav-item'>Profile</Link>}
          { isAuthenticated() && <Link to='/' onClick={this.handleLogout} className='nav-item'>Log out</Link>}
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)