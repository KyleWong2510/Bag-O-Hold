import React from 'react'
import './CreateCharacterForm.scss'

class CreateCharacterForm extends React.Component {
  constructor() {
    super(); 
    this.state = {
      characterName: '',
      characterClass: '',
      characterBio: ''
    }
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name] : value })
  }

  renderClassSelect() {
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

  render() {
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
}

export default CreateCharacterForm