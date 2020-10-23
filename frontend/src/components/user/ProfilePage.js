import React from 'react'
// import { Link } from 'react-router-dom'
import { getUserProfile } from '../../lib/api'

class ProfileShow extends React.Component {
  state = {
    profile: ''
  }

  componentDidMount = async () => {
    const response = await getUserProfile()
    this.setState({ profile: response.data })
    console.log(response.data)
  }

  render() {
    if (!this.state.profile) return null
    return (
      <div>{this.state.profile.username}</div>
    )
  }
}

export default ProfileShow