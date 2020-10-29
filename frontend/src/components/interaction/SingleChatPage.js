import React from 'react'

import { getSingleChat, createMessage } from '../../lib/api'

class SingleChatPage extends React.Component {
  state = {
    chat: null,
    formData: {
      text: '',
      related_to: null
    }
  }

  async componentDidMount() {
    const chatId = this.props.match.params.id
    const response = await getSingleChat(chatId)
    this.setState({
      chat: response.data,
      formData: {
        related_to: response.data.id
      }
    })
    console.log(this.state.chat)
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
    const chatId = this.props.match.params.id
    console.log(this.state.related_to)
    const newResponse = await createMessage(this.state.formData)
    const response = await getSingleChat(chatId)
    this.setState({
      chat: response.data,
      text: ''
    })
    console.log(newResponse.data)
  }

  render() {
    const { chat } = this.state
    if (!chat) return null
    return (
      <div className='section has-text-centered'>
        <h2>{chat.related_band.name}</h2>
        {chat.messages.map((message) => (
          <div key={message.id}>{message.text + ' <= ' + message.sent_by}</div>
        ))}
        <input 
          placeholder='Send a message...' 
          name='text' 
          value={this.state.formData.text} 
          onChange={this.handleChange}
        />
        <button type='submit' onClick={this.handleSubmit}>Send</button>
      </div>
    )
  }
}

export default SingleChatPage