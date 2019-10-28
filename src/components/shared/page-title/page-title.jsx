import React from 'react'
import PropTypes from 'prop-types'

import './page-title.scss'

export const PageTitle = ({ text }) => <h2 className='page-title'>{text}</h2>

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
}
