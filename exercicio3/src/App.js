import './index.css';

import { useEffect, useState } from 'react'

import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import SearchItem from './SearchItem';
import apiRequest from './ApiRequest';

function App() {
  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not received expected data');
        const listIems = await response.json();
        setItems(listIems);
        setFetchError(null);
      } catch (error) {
        console.log(error.message);
        setFetchError(error.message);
      } finally{
        setIsLoading(false);
      }
    }
    setTimeout(() => { (async () => await fetchItems())(); }, 2000)


  }, [])

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 + '': 1;
    const myNewItem = {  checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
    const postOptions = {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions);
    if(result) setFetchError(result);
  }

  const handlechecked = async (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    const myItem = listItems.filter((item) => item.id === id);

    const updateOptions = {
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked: myItem[0].checked})
    }
    const patchURI = `${API_URL}/${id}`;
    const result = await apiRequest(patchURI, updateOptions);
    if(result) setFetchError(result);
    
  }

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    const deleteOptions = {
      method: 'DELETE'
    }
    const patchURI = `${API_URL}/${id}`;
    const result = await apiRequest(patchURI, deleteOptions);
    if(result) setFetchError(result);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }



  return (
    <div className='App'>
      <Header
        title="Groceries List" />
      <SearchItem
        search={search}
        setSearch={setSearch} />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit} />
      <main>
        {isLoading && <p>Loading items</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handlechecked={handlechecked}
          handleDelete={handleDelete} />}
        <Footer
          length={items.length} />
      </main>
    </div>
  );
}

export default App;
