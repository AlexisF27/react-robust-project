import React from 'react'
import {footer} from './styles'

const Footer = ({length}) => {
  const toDate = new Date();

  return (
    <footer style={footer}>
      <p>
        {length} List {length === 1 ? "item" : "items"}
      </p>
      <p>
        Copyright &copy; {toDate.getFullYear()}
      </p>
    </footer>
  )
}

export default Footer