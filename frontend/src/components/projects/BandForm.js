import React from 'react'
import { createBand, getGenreList } from '../../lib/api'

class BandForm extends React.Component {
  // const { name, description, }
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
      genreChoices: response.data,
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
    const { name, description, size, genres  } = this.state.formData
    const { handleChange, handleSubmit } = this
    if (!this.state.genreChoices) return null
    return (
      <>
        <input
          placeholder='Band name'
          name='name'
          value={name}
          onChange={handleChange}
        />
        <textarea 
          placeholder='Description'
          name='description'
          value={description}
          onChange={handleChange}
        />
        <select name='goals'>
          <option>Make music</option>
          <option>Make money</option>
          <option>Make friends</option>
        </select>
        <input type='number'
          name='size'
          value={size}
          onChange={handleChange}
        />
        <select name='genres'>
          {genres.map(genre => {
            return <option key={genre.id}>{genre.name}</option>
          })}
        </select>
        <button type='submit' onClick={handleSubmit}>Submit</button>
      </>
    )
  }
}

export default BandForm