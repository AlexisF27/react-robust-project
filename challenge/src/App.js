import './App.css'

import AddColor from './AddColor';
import ColorCard from './ColorCard'
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(''); 
  return (
    <div className="App">
      <ColorCard color={color}></ColorCard>
      <AddColor color={color} setColor={setColor} ></AddColor>
    </div>
  );
}

export default App;
