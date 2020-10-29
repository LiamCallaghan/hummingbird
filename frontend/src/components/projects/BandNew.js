import React from 'react'

import { createBand } from '../../lib/api'
import BandForm from './BandForm'

class BandNew extends React.Component {

  state = {
    formData: {
      name: '',
      description: '',
      goals: '',
      size: 2,
      genres: []
    }
  }

  options = [
    { value: 1, label: 'Rock' },
    { value: 2, label: 'Metal' },
    { value: 3, label: 'Blues' },
    { value: 4, label: 'Country' },
    { value: 5, label: 'Comedy' },
    { value: 6, label: 'Electronica' },
    { value: 7, label: 'Rap' },
    { value: 8, label: 'Pop' },
    { value: 9, label: 'R&B' },
    { value: 10, label: 'Jazz' },
    { value: 11, label: 'Punk' },
    { value: 12, label: 'Ska' },
    { value: 13, label: 'Folk' },
    { value: 14, label: 'Alternative' },
    { value: 15, label: 'Cover' },
    { value: 16, label: 'Shoegaze' },
    { value: 17, label: 'Noise' },
    { value: 18, label: 'House' },
    { value: 19, label: 'Funk' },
    { value: 20, label: 'Soul' }
  ]

  handleChange = event => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    console.log(this.state.formData)
    const response = await createBand(this.state.formData)
    this.props.history.push(`/bands/${response.data.id}`)
  }

  handleMultiSelectChange = (selected) => {
    const selectedItems = selected ? selected.map(item => item.value) : []
    const formData = { ...this.state.formData, genres: selectedItems }
    this.setState({ formData })
  }

  render() {
    return (
      <section>
        <BandForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleMultiSelectChange={this.handleMultiSelectChange} formData={this.state.formData} options={this.options}/>
      </section>
    )
  }
}

export default BandNew