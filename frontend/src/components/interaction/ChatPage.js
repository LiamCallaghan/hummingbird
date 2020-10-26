import React from 'react'

import { getChatList } from '../../lib/api'

class ChatPage extends React.Component {
  state = {
    chats: []
  }

  async componentDidMount() {
    const response = await getChatList()
    console.log(response.data)
    this.setState({
      chats: response.data
    })
  }

  render() {
    if (!this.state.chats) return null
    return (
      <div>
        {this.state.chats.map((chat) => (
          <div key={chat.id} >{chat.status}</div>
        ))}
      </div>
    )
  }
}

export default ChatPage