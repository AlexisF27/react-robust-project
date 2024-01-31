import React from 'react'

const Footer = () => {
  const toDate = new Date();
  return (
    <footer>
      <p>
        Copyright &copy; {toDate.getFullYear()}
      </p>
    </footer>
  )
}

export default Footer