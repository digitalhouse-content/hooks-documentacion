import React from 'react'
import PropTypes from 'prop-types'

export const ComponentsConChildren = ({title, children}) => {
  return (
    <div>
      <h1 className='title-heading'>{title}</h1>
      <div>
        {children}
      </div>
    </div>
  )
}

ComponentsConChildren.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
