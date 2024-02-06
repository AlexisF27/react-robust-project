import './index.css';

import { useEffect, useState } from 'react'

import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  useEffect(()=> {
    localStorage.setItem('shoppingList', JSON.stringify(items));
  },[items])

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [ ...items, myNewItem ];
    setItems(listItems);
  }

  const handlechecked = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
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
      <SearchItem search={search} setSearch={setSearch}></SearchItem>
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}></AddItem>
      <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} handlechecked={handlechecked} handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
