import React from 'react'
import { getBasicUserProfile, updateUserProfile } from '../../lib/api'
import UserForm from './UserForm'

class EditUser extends React.Component {
  state = {
    formData: {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      profile_image: '',
      instrument: [''],
      skill_level: ''
    }
  }

  options = [
    { value: 1, label: 'Drum Kit' },
    { value: 2, label: 'Lead Guitar' },
    { value: 3, label: 'Rhythm Guitar' },
    { value: 4, label: 'Bass Guitar' },
    { value: 5, label: 'Acoustic Guitar' },
    { value: 6, label: 'Vocals' },
    { value: 7, label: 'Ukulele' },
    { value: 8, label: 'Harp' },
    { value: 9, label: 'Banjo' },
    { value: 10, label: 'Accordion' },
    { value: 11, label: 'Piano' },
    { value: 12, label: 'Keyboard' },
    { value: 13, label: 'Saxophone' },
    { value: 14, label: 'Trumpet' },
    { value: 15, label: 'Clarinet' },
    { value: 16, label: 'Flute' },
    { value: 17, label: 'Bagpipe' },
    { value: 18, label: 'Trombone' },
    { value: 19, label: 'Harmonica' },
    { value: 20, label: 'Oboe' },
    { value: 21, label: 'Cello' },
    { value: 22, label: 'Violin' },
    { value: 23, label: 'Double Bass' },
    { value: 24, label: 'Synth' },
    { value: 25, label: 'Drum Machine' }
  ]

  async componentDidMount() {
    const response = await getBasicUserProfile()
    this.setState({
      formData: response.data
    })
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
    const response = await updateUserProfile(this.state.formData)
    console.log(response)
    this.props.history.push('/profile')
  }

  handleMultiSelectChange = (selected) => {
    const selectedItems = selected ? selected.map(item => item.value) : []
    const formData = { ...this.state.formData, instrument: selectedItems }
    this.setState({ formData })
  }

  render() {
    return (
      <section className='section'>
        <div className='container'>
          <UserForm formData={this.state.formData} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleMultiSelectChange={this.handleMultiSelectChange} options={this.options}/>
        </div>
      </section>
    )
  }
}


export default EditUser