import React from 'react'

import { getMessageList } from '../../lib/api'

class MessagePage extends React.Component {
  state = {
    messages: []
  }

  async componentDidMount() {
    const response = await getMessageList()
    console.log(response.data)
    this.setState({
      messages: response.data
    })
  }

  render() {
    if (!this.state.messages) return null
    return (
      <div>
        {this.state.messages.map((message) => (
          <div key={message.id} >{message.text} - {message.sent_by.username}</div>
        ))}
      </div>
    )
  }
}

export default MessagePage