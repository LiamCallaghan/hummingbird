import React from 'react'
import { getUserProfile, updateUserProfile } from '../../lib/api'
import UserForm from './UserForm'

class EditUser extends React.Component {
  state = {
    formData: {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      profile_image: '',
      instrument: [],
      skill_level: ''
    }
  }

  async componentDidMount() {
    const response = await getUserProfile()
    this.setState({
      formData: response.data
    })
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
    const response = await updateUserProfile(this.state.formData)
    console.log(response.data)
    this.props.history.push('/profile')
  }

  render() {
    return (
      <section className='section'>
        <div className='container'>
          <UserForm formData={this.state.formData} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
      </section>
    )
  }
}


export default EditUser