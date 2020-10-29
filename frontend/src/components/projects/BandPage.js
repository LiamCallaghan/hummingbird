import React from 'react'
import { Link } from 'react-router-dom'

import { getSingleBand, startChat, getUserProfile } from '../../lib/api'

class BandPage extends React.Component {
  state = {
    band: null,
    related_band: null,
    owner: null
  }

  async componentDidMount() {
    const bandId = this.props.match.params.id
    const response = await getSingleBand(bandId)
    this.setState({
      related_band: response.data.id,
      band: response.data,
      owner: response.data.owner.id
    })
    console.log(this.state)
  }

  handleSubmit= async event => {
    console.log(this.state.related_band)
    event.preventDefault()
    const response = await startChat({ related_band: this.state.related_band })
    this.props.history.push(`/chat/${response.data.id}`)
  }

  isOwner = async ownerId => {
    const response = await getUserProfile()
    console.log(response.data.id)
    console.log(ownerId)
    if (response.data.id === ownerId) return true
  }

  render() {
    const { band } = this.state
    if (!band) return null
    return (
      <div className='columns'>
        <div className='column is-full-length'>
          <div className='column is-full-length'>
            <h2 className='is-title'>{band.name}</h2>
            <p>{band.description}</p>
            <p>{band.owner.name}</p>
            <div>{band.genre.map(style => <span key={style.id}>{style.name}<br/></span>)}</div>
            { this.isOwner(this.state.owner) ? (<Link to={'/chat'}><div>Chats : {band.chats.length}</div></Link>) : null}
            { this.isOwner(this.state.owner) ? (<button type='submit' onClick={this.handleSubmit}>Message the owner</button>) : null}
          </div>
        </div>
      </div>
    )
  }
} 

export default BandPage