import React from 'react'

const BandForm = props => {
  const { name, description, goals, size, genres } = props.formData
  const { handleChange, handleSubmit, genreChoices } = props

  return (
    <>
      <input
        placeholder='Band name'
        name='name'
        value={name}
        onChange={handleChange}
      />
      <textarea 
        placeholder='Description'
        name='description'
        value={description}
        onChange={handleChange}
      />
      <select name='goals' value={goals} onChange={handleChange}>
        <option>Make music</option>
        <option>Make money</option>
        <option>Make friends</option>
      </select>
      <input type='number'
        name='size'
        value={size}
        onChange={handleChange}
      />
      {/* {genreChoices.map(genre => {
        <div>
          <input type='checkbox' key={genre.id} id={genre.name} name={genre.name} value={genre.name} />
          <label htmlFor={genre.name}>{genre.name}</label>
        </div>
      })} */}
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default BandForm