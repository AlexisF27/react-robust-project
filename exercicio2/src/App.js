import './index.css';

import AddItem from './AddItem';
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
  const [newItem, setNewItem] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    console.log("newItems", newItems)
    localStorage.setItem('shoppingList', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [ ...items, myNewItem ];
    setAndSaveItems(listItems);
  }

  const handlechecked = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className='App'>
      <Header title="Groceries List" />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}></AddItem>
      <Content items={items} handlechecked={handlechecked} handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
