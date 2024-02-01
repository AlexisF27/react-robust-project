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

  const handlechecked = (id) => {
    console.log(`key: ${id}`)
    // const idMinus1 = id -1;
    // const listItems = [...items]
    // listItems[idMinus1].checked = !listItems[id].checked;
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shopingList', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shopingList', JSON.stringify(listItems));

  }

  const content = {
    textAlign: 'center',
    paddingTop: '20px',
  }



  return (
    <main style={content}>
      {items.length ?(
        <ul>
          {items.map((item) => (
            <li className='item' key={item.id}>
              <input type="checkbox" checked={item.checked} onChange={() => handlechecked(item.id)} />
              <label
                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handlechecked(item.id)}
              >{item.item}</label>
              <FaTrashAlt onClick={() => handleDelete(item.id)} role="button" tabIndex="0">Delete</FaTrashAlt>
            </li>
          ))}
        </ul>
      ) : (
      <p style={{marginTop:'2rem'}}> Your list is empty </p>
      )
      }

    </main>
  )
}

export default Content