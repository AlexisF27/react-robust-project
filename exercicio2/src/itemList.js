import LineItem from './LineItem'
import React from 'react'

const itemList = ({ items, handlechecked, handleDelete }) => {
  return (
    <>
      <ul>
        {items.map((item) => (
          <LineItem key={item.id} item={item} handlechecked={handlechecked} handleDelete={handleDelete}></LineItem>
        ))}
      </ul>
    </>
  )
}

export default itemList