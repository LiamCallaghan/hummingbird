import React from 'react'
import { Link } from 'react-router-dom'

const BandItem = ({ id, description, genre, goals, name, size, owner }) => {
  return (
    <div id={id} className='band-item'>
      <Link to={`/bands/${id}`}>
        <div className='card'>
          <div className='card-header'>
            <h3 className='card-header-title'>{name} - {'Wants to ' + goals} - {<span className='style-hider'>Hover to show genres</span>} - {genre.map(style => <span key={style.id} className='styles'>{style.name + '.'}</span>)}</h3>
          </div>
          <div className='card-content'>
            <p>{description.slice(0,30) + '...'} - {'Looking for ' + size + ' members'} - {'Created by: ' + owner.username}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BandItem