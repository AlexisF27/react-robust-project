import React from 'react'

const Header = ({ title = "Default Title" }) => {
  const header = {
    backgroundColor: 'mediumblue',
    color: '#fff',
    textAlign: 'center'
  }
  return (
    <header style={header}>
      <h1>{title}</h1>
    </header>
  )
}



export default Header