import React from 'react'

import { getSingleChat, createMessage } from '../../lib/api'

class SingleChatPage extends React.Component {
  state = {
    chat: null,
    formData: {
      text: '',
      related_to: ''
    }
  }

  async componentDidMount() {
    const chatId = this.props.match.params.id
    const response = await getSingleChat(chatId)
    this.setState({
      chat: response.data,
      related_to: chatId
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
    const chatId = this.props.match.params.id
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
      <>
        <div>{chat.id}</div>
        {chat.messages.map((message) => (
          <div key={message.id}>{message.text}</div>
        ))}
        <input 
          placeholder='Send a message...' 
          name='text' 
          value={this.state.formData.text} 
          onChange={this.handleChange}
        />
        <button type='submit' onClick={this.handleSubmit}>Send</button>
      </>
    )
  }
}

export default SingleChatPage