/* eslint-disable camelcase */
import React from 'react'

const UserForm = props => {
  const { username, email, password, password_confirmation, profile_image, instrument, skill_level } = props.formData
  const { handleChange, handleSubmit } = props

  return (
    <div className="columns">
      <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter box">
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input
              className="input"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Profile image</label>
          <div className="control">
            <input
              className="input"
              placeholder="Image URL"
              name="profile_image"
              value={profile_image}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Skill level</label>
          <div className="control">
            <select name='skill_level' value={skill_level} onChange={handleChange}>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Expert</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label">Instruments</label>
          <div className="control">
            <select name='instrument' value={instrument} onChange={handleChange} multiple>
              <option>Drum Kit</option>
              <option>Lead Guitar</option>
              <option>Rhythm Guitar</option>
              <option>Bass Guitar</option>
              <option>Acoustic Guitar</option>
              <option>Vocals</option>
              <option>Ukulele</option>
              <option>Harp</option>
              <option>Banjo</option>
              <option>Accordion</option>
              <option>Piano</option>
              <option>Keyboard</option>
              <option>Saxophone</option>
              <option>Trumpet</option>
              <option>Clarinet</option>
              <option>Flute</option>
              <option>Bagpipe</option>
              <option>Trombone</option>
              <option>Harmonica</option>
              <option>Oboe</option>
              <option>Cello</option>
              <option>Violin</option>
              <option>Double Bass</option>
              <option>Synth</option>
              <option>Drum Machine</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              type='password'
              className="input"
              placeholder="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password confirmation</label>
          <div className="control">
            <input
              type='password'
              className="input"
              placeholder="password"
              name="password_confirmation"
              value={password_confirmation}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <button type="submit" className="button is-fullwidth is-warning">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default UserForm