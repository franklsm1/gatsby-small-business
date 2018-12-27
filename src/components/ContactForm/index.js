import React from 'react'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class ContactForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      showModal: false,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => console.log(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      showModal: true,
    })
  }

  clearForm = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  renderModal = () => (
    <div className={`modal ${this.state.showModal ? 'is-active' : ''}`}>
      <div className='modal-background' />
      <div className='modal-content'>
        <div className='box'>
          <strong>Email Sent</strong>
          <p>
            Thank you for reaching out.
            <br />
            We will get back to you as soon as possible.
          </p>
        </div>
      </div>
      <button className='modal-close is-large' aria-label='close' />
    </div>
  )

  render () {
    return (
      <div className='card'>
        <div className='card-content'>
          <form
            name='contact'
            onSubmit={this.handleSubmit}
            data-netlify='true'
            data-netlify-honeypot='bot'
            onClick={this.closeModal}
          >
            <div className='field'>
              <label className='label'>Name</label>
              <p className='control has-icons-left has-icons-right'>
                <input
                  className='input'
                  name='name'
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  required
                  type='text'
                  placeholder='Name' />
                <span className='icon is-small is-left'>
                  <i className='fas fa-user' />
                </span>
              </p>
            </div>
            <div className='field'>
              <label className='label'>Email</label>
              <p className='control has-icons-left has-icons-right'>
                <input
                  className='input'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
                  type='email'
                  placeholder='Email' />
                <span className='icon is-small is-left'>
                  <i className='fas fa-envelope' />
                </span>
              </p>
            </div>
            <div className='field'>
              <label className='label'>Message</label>
              <div className='control'>
                <textarea
                  className='textarea'
                  name='message'
                  value={this.state.message}
                  onChange={this.handleInputChange}
                  required
                  rows='4'
                  placeholder='Fill in with your inquiry' />
              </div>
            </div>
            <div className='field is-grouped'>
              <div className='control'>
                <button
                  type='submit'
                  className='button is-primary'>
                  Send Inquiry
                </button>
              </div>
              <div className='control'>
                <button
                  type='button'
                  onClick={this.clearForm}
                  className='button is-light'>
                  Reset Form
                </button>
              </div>
            </div>
            {this.renderModal()}
          </form>
        </div>
      </div>
    )
  }
}
