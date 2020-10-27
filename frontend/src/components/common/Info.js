import React from 'react'

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
              <div className='gen-info'>
                <h3>Looking to start a band or join one?</h3>
                <p>Whatever your skill level or prefered style, there is a place for you here!</p>
                <h1>Sign in now!</h1>
              </div>
              <div className='log-info'>
                <h1>Search for a band</h1>
                <h1>or</h1>
                <h1>Start one yourself</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Info