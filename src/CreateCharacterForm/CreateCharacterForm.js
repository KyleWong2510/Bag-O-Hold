import React, { useState } from 'react'
import './CreateCharacterForm.scss'

const CreateCharacterForm = () => {
  const [characterName, setCharacterName] = useState('')
  const [characterClass, setCharacterClass] = useState('')
  const [characterRace, setCharacterRace] = useState('')
  const [characterBackground, setCharacterBackground] = useState('')
  const [characterBio, setCharacterBio] = useState('')

  const renderClassSelect = () => {
    return (
      <select
        name='characterClass'
        onChange={this.handleChange}
      >
        <option>Select a Class...</option>
        <option></option>
      </select>
    )
  }

  return (
    <form>
      <input 
        type='text'
        name='characterName'
        placeholder='Character Name...'
        value={this.state.name}
        onChange={(e) => this.handleChange(e)}
      />
      <input 
        type='text'
        name='characterBio'
        placeholder='Character Bio...'
        value={this.state.name}
        onChange={(e) => this.handleChange(e)}
      />

    </form>
  )
}

export default CreateCharacterForm