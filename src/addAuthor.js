import React, { Component } from 'react'
import Axios from 'axios'

export default class AddAuthorForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lastName: '',
      firstName: '',
      countryName: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    Axios.post(`${process.env.JAWSDB_MARIA_URL}/api`, {
      name_last: `${this.state.lastName}`,
      name_first: `${this.state.firstName}`,
      country: `${this.state.countryName}`
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params: {
        table: 'authors'
      }
    })
      .then(() => alert('Author successfully added'))
      .catch(err => alert(err))
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Add author to library</h2>
        <label>
        <p>Last name</p>
        <textarea type='text' name='lastName' onChange={this.handleChange} value={this.state.lastName} style={{ flex: 1 }}/>
        </label>
        <label>
        <p>First name</p>
        <textarea type='text' name='firstName' onChange={this.handleChange} value={this.state.firstName} style={{ flex: 1 }}/>
        </label>
        <label>
        <p>Country of origin</p>
        <textarea type='text' name='countryName' onChange={this.handleChange} value={this.state.countryName} style={{ flex: 1 }}/>
        </label>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
