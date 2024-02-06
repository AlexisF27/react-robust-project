import {FaPlus} from 'react-icons/fa'
import React from 'react'
import {useRef} from 'react';

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor="addItem"> Add Item </label>
      <input
        autoFocus
        id='addItem'
        type='text'
        ref={inputRef}
        placeholder='Add Item'
        required 
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}/>
      <button type='submit' aria-label='Add Item' onClick={() => inputRef.current.focus()}>
        <FaPlus></FaPlus>
      </button>



    </form>
  )
}

export default AddItem