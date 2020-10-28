import React from 'react'
import BandItem from './BandItem'
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
    const { bands } = this.state
    if (!bands) return null
    return (
      <div className='section'>
        {bands.map((band) => (
          <BandItem key={band.id} {...band} />
        ))}
      </div>
    )
  }
}

export default BandIndex