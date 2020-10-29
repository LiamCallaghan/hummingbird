import React from 'react'
import Select from 'react-select'

const BandForm = props => {
  const { name, description, goals, size } = props.formData
  const { handleChange, handleSubmit, handleMultiSelectChange, options } = props

  return (
    <>
      <div className="columns">
        <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter box">
          <div className="field">
            <label className="label">Band name</label>
            <div className="control">
              <input
                placeholder='Band name'
                name='name'
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea 
                  placeholder='Description'
                  name='description'
                  value={description}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Band goal</label>
              <div className="control">
                <select name='goals' value={goals} onChange={handleChange}>
                  <option>Make music</option>
                  <option>Make money</option>
                  <option>Make friends</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label className="label">Genre</label>
              <div className="control">
                <Select options={options} isMulti onChange={handleMultiSelectChange} />
              </div>
            </div>
            <div className="field">
              <label className="label">Preferred band size</label>
              <div className="control">
                <input type='number'
                  name='size'
                  value={size}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="is-fullwidth">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default BandForm