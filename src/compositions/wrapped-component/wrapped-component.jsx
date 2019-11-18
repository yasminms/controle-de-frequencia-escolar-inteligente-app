import React from 'react'
import PropTypes from 'prop-types'
import { Header } from '../../components'

export const WrappedComponent = BaseComponent => props => (
  <>
    <Header />
    <BaseComponent {...props} />
  </>
)

WrappedComponent.propTypes = {
  BaseComponent: PropTypes.node.isRequired,
}
