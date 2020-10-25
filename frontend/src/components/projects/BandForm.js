import React from 'react'
import { createBand, getGenreList } from '../../lib/api'

class BandForm extends React.Component {
  // const { name, description, }
  state = {
    // formData: {
    //   name: '',
    //   description: '',
    //   goals: '',
    //   size: null,
    genres: []
    // }
  }

  componentDidMount = async () => {
    const response = await getGenreList()
    this.setState({
      genres: response.data
    })
    console.log(response.data)
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
    const response = await createBand(this.state.formData)
    this.props.history.push(`/bands/${response.data._id}`)
  }

  render() {
    const { genres } = this.state
    if (!genres) return null
    return (
      <>
        {genres.map(genre => (
          <div key={genre.id}>{genre.name}</div>
        ))}
      </>
    )
  }
}

export default BandForm