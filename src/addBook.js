import React, { Component } from 'react'
import Axios from 'axios'

export default class AddBookForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isbn: '',
      title: '',
      author_id: '',
      year_pub: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    Axios.post(`${process.env.REACT_APP_BACK_END_URL}/api`, {
      isbn: `${this.state.isbn}`,
      title: `${this.state.title}`,
      author_id: `${this.state.author_id}`,
      year_pub: `${this.state.year_pub}`,
      description: `${this.state.description}`
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params: {
        table: 'books'
      }
    })
      .then(res => alert(res))
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
            <h2>Add book to library</h2>
            <label>
            <p>ISBN</p>
            <textarea type='text' name='isbn' onChange={ this.handleChange } value={this.state.isbn} style={{ flex: 1 }}/>
            </label>
            <label>
            <p>Title</p>
            <textarea type='text' name='title' onChange={ this.handleChange } value={this.state.title} style={{ flex: 1 }}/>
            </label>
            <label>
            <p>Author ID</p>
            <textarea type='text' name='author_id' onChange={ this.handleChange } value={this.state.author_id} style={{ flex: 1 }}/>
            </label>
            <label>
            <p>Year Published</p>
            <textarea type='text' name='year_pub' onChange={ this.handleChange } value={this.state.year_pub} style={{ flex: 1 }}/>
            </label>
            <label>
            <p>Book Description</p>
            <textarea type='text' name='description' onChange={ this.handleChange } value={this.state.description} style={{ flex: 1 }}/>
            </label>
            <button type='submit'>Submit</button>
        </form>
    )
  }
}
