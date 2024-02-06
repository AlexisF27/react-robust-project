import React from 'react'

const AddColor = ({color, setColor}) => {
  return (
    <form className='addColorForm' onSubmit={(event) => event.preventDefault()}>
      <input
        placeholder='Add color name'
        style={{
          "padding": "20px",
          "margin": "10px",
          "width": "360px",
          "fontSize": "40px"
        }}
        id='addColor'
        type='text'
        role='searchbox'
        value={color}
        onChange={(event) => setColor(event.target.value)}
      ></input>
   
    </form>

  )
}

export default AddColor