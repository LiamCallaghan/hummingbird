import React from 'react'
// import { Link } from 'react-router-dom'
import { getSingleProfile } from '../../lib/api'

class ProfileShow extends React.Component {
  state = {
    profile: ''
  }

  componentDidMount = async () => {
    const response = await getSingleProfile(this.props.match.params.id)
    this.setState({ profile: response.data })
  }

  render() {
    if (!this.state.profile) return null
    return (
      <div>{this.state.profile.username}</div>
    )
  }
}

export default ProfileShow