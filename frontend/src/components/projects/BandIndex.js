import React from 'react'
import { Link } from 'react-router-dom'
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
      <>
        {bands.map((band) => (
          <Link to={`/bands/${band.id}`} key={band.id}>
            <div >{band.name}</div>
          </Link>
        ))}
      </>
    )
  }
}

export default BandIndex