import React from 'react'
import {Link} from 'gatsby'

const contactUsStyle = {
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginLeft: 'auto',
}
const NavBar = ({toggleNavbar}) => (
  <nav className='navbar is-flex is-fixed-top' aria-label='main navigation'>
    <div className='navbar-brand'>
      <Link to='/' className='navbar-item'>
        <strong>Climate Tech Inc.</strong>
      </Link>
    </div>
    <div className='navbar-item is-flex' style={contactUsStyle}>
      <a
        className='is-primary is-outlined'
        href='#contact-section'>
        Contact Us
      </a>
    </div>
  </nav>
)

export default NavBar
