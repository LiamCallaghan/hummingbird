import React from 'react'

import { getUserProfile, updateUserProfile } from '../../lib/api'

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
}


export default EditUser