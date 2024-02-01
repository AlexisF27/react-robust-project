import { FaTrashAlt } from 'react-icons/fa'
import { useState } from 'react'

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "BAnana"
    },
    {
      id: 2,
      checked: false,
      item: "Crema"
    },
    {
      id: 3,
      checked: false,
      item: "apple"
    },

  ]);

  const handlechecked = (id) =>{
    console.log(`key: ${id}`)
    // const idMinus1 = id -1;
    // const listItems = [...items]
    // listItems[idMinus1].checked = !listItems[id].checked;
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    
    setItems(listItems);
  }

  const content = {
    textAlign: 'center',
    paddingTop: '20px',
  }



  return (
    <main style={content}>
      <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input type="checkbox" checked={item.checked} onChange={() => handlechecked(item.id)}/>
            <label>{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0">Delete</FaTrashAlt>
          </li>
        ))}
      </ul>

    </main>
  )
}

export default Content