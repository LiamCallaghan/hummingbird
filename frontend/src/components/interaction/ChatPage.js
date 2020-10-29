import React from 'react'
import { Link } from 'react-router-dom'

import { getChatList } from '../../lib/api'

class ChatPage extends React.Component {
  state = {
    chats: [],
    related_band: ''
  }

  async componentDidMount() {
    const response = await getChatList()
    console.log(response.data)
    this.setState({
      chats: response.data,
      related_band: response.data[0].related_band.name
    })
  }

  render() {
    if (!this.state.chats) return null
    return (
      <div className='section has-text-centered chat'>
        <div>{this.state.related_band}</div>
        {this.state.chats.map((chat) => (
          <Link to={`/chat/${chat.id}`} className='link-style' key={chat.id}><div>{chat.sender.username}</div></Link>
        ))}
      </div>
    )
  }
}

export default ChatPage