import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="layout-wrapper">
          <div className="layout-container">
            <Navbar />
            <Main />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
