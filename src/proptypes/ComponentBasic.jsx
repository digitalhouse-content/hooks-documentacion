import React from 'react'
import PropTypes from 'prop-types'

export default function ComponentBasic({data}) {
  return (
    <div>{JSON.stringify(data)}</div>
  )
}


ComponentBasic.propTypes = {
  // data: PropTypes.string
  // data: PropTypes.number
  // data: PropTypes.bool
  data: PropTypes.array
}