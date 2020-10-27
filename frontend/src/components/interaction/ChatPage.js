import React from 'react'
import { Link } from 'react-router-dom'

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
          <Link to={`/chat/${chat.id}`} key={chat.id}><div>{chat.status}</div></Link>
        ))}
      </div>
    )
  }
}

export default ChatPage