import React from 'react'
import { Link } from 'react-router-dom'

import { getSingleBand, startChat } from '../../lib/api'

class BandPage extends React.Component {
  state = {
    band: null,
    related_band: null
  }

  async componentDidMount() {
    const bandId = this.props.match.params.id
    const response = await getSingleBand(bandId)
    this.setState({
      related_band: response.data.id,
      band: response.data
    })
    console.log(response.data.id)
  }

  handleSubmit= async event => {
    console.log(this.state.related_band)
    event.preventDefault()
    const response = await startChat(this.state.related_band)
    this.props.history.push(`/chat/${response.data.id}`)
  }

  render() {
    const { band } = this.state
    if (!band) return null
    return (
      <>
        <div>{band.name}</div>
        <div>{band.description}</div>
        <div>{band.owner.username}</div>
        <Link to={'/chat'}><div>Chats : {band.chats.length}</div></Link>
        <button type='submit' className='button' onClick={this.handleSubmit}>Start a chat</button>
      </>
    )
  }
} 

export default BandPage