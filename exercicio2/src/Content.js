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
  const handleClick2 = (name) => {
    console.log(`You click ${name}`);
  }
  const handleClick3 = (event) => {
    console.log(event.target.innerText);
  }
  return (
    <main style={content}>
      <p onDoubleClick={handleClick}>
        Hello {handleNameChange()} !
      </p>
      <button onClick={() => handleClick2('Alexis')}> Click it</button>
      <button onClick={(event) => handleClick3(event)}> Click 3 it</button>
    </main>
  )
}

export default Content