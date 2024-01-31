import './App.css';

import logo from './logo.svg';

function App() {
  const handleNameChange = () => {
    const names = ['Alexis', 'Fernando', 'David'];
    const int = Math.floor(Math.random () * 3);
    console.log(names[int]);
    return names[int];
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Hello {handleNameChange()} !
        </p>

      </header>
    </div>
  );
}

export default App;
