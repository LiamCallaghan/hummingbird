import React from 'react'

import { registerUser } from '../../lib/api'

class Register extends React.Component {
  state = {
    formData: {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  }

  handleChange = event => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()

    try {
      await registerUser(this.state.formData)
      console.log('success!')
      this.props.history.push('/login')
    } catch (err) {
      console.log('error')
    }
  }

  render() {
    // eslint-disable-next-line camelcase
    const { username, email, password, password_confirmation } = this.state.formData
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter box">
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    // className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                </div>
                {/* { this.state.errors.username && <p className='help is-danger'>{ this.state.errors.username }</p> } */}
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    // className={`input ${this.state.errors.email ? 'is-danger' : ''}`}
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </div>
                {/* { this.state.errors.email && <p className='help is-danger'>{ this.state.errors.email }</p> } */}
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type='password'
                    // className={`input ${this.state.errors.password ? 'is-danger' : ''}`}
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>
                {/* { this.state.errors.password && <p className='help is-danger'>{ this.state.errors.password }</p> } */}
              </div>
              <div className="field">
                <label className="label">Password Confirmation</label>
                <div className="control">
                  <input
                    type="password"
                    // className={`input ${this.state.errors.passwordConfirmation ? 'is-danger' : ''}`}
                    placeholder="Password Confirmation"
                    name="password_confirmation"
                    // eslint-disable-next-line camelcase
                    value={password_confirmation}
                    onChange={this.handleChange}
                  />
                </div>
                {/* { this.state.errors.passwordConfirmation && <p className='help is-danger'>{ this.state.errors.passwordConfirmation }</p> } */}
              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth is-warning">Register</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Register