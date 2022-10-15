import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} /> {/* cuma buat cek hasil slicing */}
      </Routes>
    </div>
  );
}

export default App;
