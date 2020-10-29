import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { isAuthenticated } from '../../lib/auth'

class Info extends React.Component {

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xOen4knb8z7iSvSIkSp5swHaE8%26pid%3DApi&f=1' alt='info-page' />
              </figure>
            </div>
            <div className="column is-half">
              { !isAuthenticated() && <div className='gen-info'>
                <h2>Looking to start a band or join one?</h2>
                <p>Whatever your skill level or prefered style, there is a place for you here!</p>
                <Link to='/register'><button>Register now!</button></Link>
              </div>}
              { isAuthenticated() && <div className='log-info'>
                <Link to='/bandslist'><h2 className='link-style'>Search for a band</h2></Link>
                <h2>or</h2>
                <Link to='/bands/'><h2 className='link-style'>Start one yourself</h2></Link>
              </div>}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default withRouter(Info)