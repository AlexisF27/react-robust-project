import './index.css';

import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react'

function App() {
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
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shopingList', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shopingList', JSON.stringify(listItems));
  }

  return (
    <div className='App'>
      <Header title="Groceries List"/>
      <Content items={items} handlechecked={handlechecked} handleDelete={handleDelete}/>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
