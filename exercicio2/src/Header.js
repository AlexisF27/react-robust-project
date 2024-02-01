import React from 'react'

const Header = () => {
  const header = {
    backgroundColor: 'mediumblue',
    color: '#fff',
    textAlign: 'center'
  }
  return (
    <header style={header}>
      <h1>Groceries List</h1>
    </header>
  )
}

export default Header