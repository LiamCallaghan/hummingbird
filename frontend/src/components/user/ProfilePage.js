import React from 'react'
import { Link } from 'react-router-dom'
import { getUserProfile } from '../../lib/api'

class ProfileShow extends React.Component {
  state = {
    profile: ''
  }

  componentDidMount = async () => {
    const response = await getUserProfile()
    this.setState({ profile: response.data })
    console.log(response.data)
  }

  render() {
    const { profile } = this.state
    if (!profile) return null
    return (
      <div className='section'>
        <div className='container'>
          <div className="columns">
            <div className="column is-three-fifths border">
              <div className='columns'>
                <div className='column'>
                  <img src={profile.profile_image} alt='profile' width="255" height="255"/><br/>
                </div>
                <div className='column'>
                  username - {profile.username}<br/>
                  email - {profile.email}<br/>
                  date joined - {profile.date_joined.slice(0, 10)}<br/>
                  skill level - {profile.skill_level}<br/>
                  {<span className='style-hider'>Hover to show instruments</span>} - {profile.instrument.map(instrument => <span key={instrument.id} className='styles'>{instrument.name + '.'}</span>)}
                  <Link to={'/profile/edit'}><button>Edit profile</button></Link>
                </div>
              </div>
            </div>
            <div className="column is-multiline">
              <div className='container border'>
                <h2>Created bands - </h2>
                <div>
                  {profile.created_band.map((band) => (
                    <Link to={`/bands/${band.id}`} key={band.id}><div className='link-style'>{band.name}</div></Link>
                  ))}
                </div>
                <Link to={'/bands/'}><button>Create a new band!</button></Link>
              </div>
              <div className='container border'>
                <h2>Chats - </h2>
                <div>
                  {profile.sent_chats.map((chat) => (
                    <Link to={`/chat/${chat.id}`} key={chat.id}><div className='link-style'>{chat.related_band.name}</div></Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileShow