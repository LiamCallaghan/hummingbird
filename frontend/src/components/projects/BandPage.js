import React from 'react'

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
      </>
    )
  }
} 

export default BandPage