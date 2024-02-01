import React from 'react'

const Content = () => {
  const content = {
    textAlign: 'center',
    paddingTop: '20px',
    
  }
  const handleNameChange = () => {
    const names = ['Alexis', 'Fernando', 'David'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  const handleClick = () => {
    console.log('You click');
  }
  return (
    <main style={content}>
      <p>
        Hello {handleNameChange()} !
      </p>
      <button onClick={handleClick}> Click it</button>
    </main>
  )
}

export default Content