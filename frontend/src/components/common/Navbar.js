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
      <nav>
        <div>
          <Link to='/' >Info</Link>
          <Link to='/bands' >Bands</Link>
          {/* <Link to='/users/' >Profile</Link> */}
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)