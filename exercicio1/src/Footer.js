import React from 'react'

const Footer = () => {
  const toDate = new Date();
  const footer = {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    padding: "10px",
    backgroundColor: 'mediumblue',
    textAlign: 'center',
    color: '#fff'
  }
  return (
    <footer style={footer}>
      <p>
        Copyright &copy; {toDate.getFullYear()}
      </p>
    </footer>
  )
}

export default Footer