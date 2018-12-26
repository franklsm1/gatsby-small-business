import React from 'react'

const ContactForm = () => (
  <div className='card'>
    <div className='card-content'>
      <form method='POST' action='#' name='contact-form' data-netlify='true' data-netlify-honeypot='bot-field'>
        <div className='field'>
          <label className='label'>Name</label>
          <p className='control has-icons-left has-icons-right'>
            <input className='input' type='text' placeholder='Name' />
            <span className='icon is-small is-left'>
              <i className='fas fa-user' />
            </span>
          </p>
        </div>
        <div className='field'>
          <label className='label'>Email</label>
          <p className='control has-icons-left has-icons-right'>
            <input className='input' type='email' placeholder='Email' />
            <span className='icon is-small is-left'>
              <i className='fas fa-envelope' />
            </span>
            <span className='icon is-small is-right'>
              <i className='fas fa-check' />
            </span>
          </p>
        </div>
        <div className='field'>
          <label className='label'>Message</label>
          <div className='control'>
            <textarea className='textarea' rows='4' placeholder='Fill in with your inquiry' />
          </div>
        </div>
        <div className='field is-grouped'>
          <p className='control'>
            <button type='submit' className='button is-primary'>
              Send Message
            </button>
          </p>
          <p className='control'>
            <button className='button is-light'>
              Reset Form
            </button>
          </p>
        </div>
      </form>
    </div>
  </div>
)

export default ContactForm
