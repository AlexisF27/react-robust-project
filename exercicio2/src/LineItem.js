import { FaTrashAlt } from 'react-icons/fa'
import React from 'react'

const LineItem = ({ item, handlechecked, handleDelete }) => {
  return (
    <li className='item' key={item.id}>
      <input type="checkbox" checked={item.checked} onChange={() => handlechecked(item.id)} />
      <label
        style={(item.checked) ? { textDecoration: 'line-through' } : null}
        onDoubleClick={() => handlechecked(item.id)}
      >{item.item}</label>
      <FaTrashAlt onClick={() => handleDelete(item.id)} role="button" tabIndex="0">Delete</FaTrashAlt>
    </li>
  )
}

export default LineItem