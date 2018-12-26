import React from 'react'
import PropTypes from 'prop-types'

const Offerings = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map((item, index) => (
      <div key={item.image + index} className='column is-6' style={{borderRadius: '5px'}}>
        <section className='section'>
          <p className='has-text-centered'>
            <img alt='' src={item.image} />
          </p>
          <h3>{item.blurbHeader}</h3>
          {item.bullets ? item.bullets.map((bullet, index) => (<span key={`bullet${index}`}>- {bullet}<br /></span>)) : null}
        </section>
      </div>
    ))}
  </div>
)

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      blurbHeader: PropTypes.string,
      bullets: PropTypes.arrayOf(
        PropTypes.string
      ),
    })
  ),
}

export default Offerings
