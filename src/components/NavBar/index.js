import React from 'react'
import {Link} from 'gatsby'

const NavBar = ({toggleNavbar, isActive}) => (
  <nav className='navbar is-fixed-top' aria-label='main navigation'>
    <div className='navbar-brand'>
      <Link to='/' className='navbar-item'>
        <strong>Climate Tech Inc.</strong>
      </Link>
      <button
        className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
        data-target='navMenu'
        onClick={toggleNavbar}
      >
        <span />
        <span />
        <span />
      </button>
    </div>
    <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>
      <div className='navbar-end'>
        <div className='navbar-item'>
          <div className='field is-grouped'>
            <p className='control'>
              <a
                className='is-primary is-outlined'
                onClick={toggleNavbar}
                href='#contact-section'>
                      Contact Us
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default NavBar
