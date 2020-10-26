import React from 'react'

import { createBand, getGenreList } from '../../lib/api'
import BandForm from './BandForm'

class BandNew extends React.Component {

  state = {
    genreChoices: [],
    formData: {
      name: '',
      description: '',
      goals: '',
      size: 2,
      genres: []
    }
  }

  componentDidMount = async () => {
    const response = await getGenreList()
    this.setState({
      genreChoices: response.data
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
    console.log(response.data)
    this.props.history.push(`/bands/${response.data.id}`)
  }

  render() {
    return (
      <section>
        <BandForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} formData={this.state.formData} genreChoices={this.state.genreChoices}/>
      </section>
    )
  }
}

export default BandNew