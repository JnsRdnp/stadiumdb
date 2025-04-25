
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Builds from './pages/Builds';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builds" element={<Builds />} />
        </Routes>

      </header>
    </div>
  );
}

export default App;