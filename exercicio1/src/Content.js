import React from 'react'

const Content = () => {
  const content = {
    textAlign: 'center',
    paddingTop: '20px'
  }
  const handleNameChange = () => {
    const names = ['Alexis', 'Fernando', 'David'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  return (
    <main style={content}>
      <p>
        Hello {handleNameChange()} !
      </p>
    </main>
  )
}

export default Content