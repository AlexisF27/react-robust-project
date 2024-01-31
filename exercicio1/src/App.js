import './index.css';

import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function App() {

  return (
    <div >
      <Header/>
      <Content className="content"/>
      <Footer/>
    </div>
  );
}

export default App;
