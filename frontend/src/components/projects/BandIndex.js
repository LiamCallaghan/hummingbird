import React from 'react'
// import { Link } from 'react-router-dom'
import { getBandList } from '../../lib/api'

class BandIndex extends React.Component {
  state = {
    bands: null
  }

  componentDidMount = async () => {
    const response = await getBandList()
    this.setState({ bands: response.data })
    console.log(response.data)
  }

  render() {
    if (!this.state.bands) return null
    return (
      <>
        {this.state.bands.map((band, i) => (
          <div key={i}>{band.name}</div>
        ))}
      </>
    )
  }
}

export default BandIndex