import React from 'react'
import { Spinner } from 'react-bootstrap'

export const SpinnerDisplay = () => (
  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
)