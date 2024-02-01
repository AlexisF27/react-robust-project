import React from 'react'
import {footer} from './styles'

const Footer = () => {
  const toDate = new Date();

  return (
    <footer style={footer}>
      <p>
        Copyright &copy; {toDate.getFullYear()}
      </p>
    </footer>
  )
}

export default Footer