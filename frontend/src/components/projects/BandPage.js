import React from 'react'
import { Link } from 'react-router-dom'

import { getSingleBand } from '../../lib/api'

class BandPage extends React.Component {
  state = {
    band: null
  }

  async componentDidMount() {
    const bandId = this.props.match.params.id
    const response = await getSingleBand(bandId)
    this.setState({
      band: response.data
    })
    console.log(response.data)
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
      </>
    )
  }
} 

export default BandPage