import { useState } from 'react'

const Content = () => {
  const [name, setName] = useState('Alexis');
  const [count, setCount] = useState(0);
  const content = {
    textAlign: 'center',
    paddingTop: '20px',

  }
  const handleNameChange = () => {
    const names = ['Alexis', 'Fernando', 'David'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }
  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  }
  const handleClick2 = () => {
    console.log(count);
  }


  return (
    <main style={content}>
      <p onDoubleClick={handleClick}>
        Hello {name} !
      </p>
      <button onClick={handleNameChange}> Change Name</button>
      <button onClick={handleClick}> Count</button>
      <button onClick={handleClick2}> Count 2</button>
    </main>
  )
}

export default Content