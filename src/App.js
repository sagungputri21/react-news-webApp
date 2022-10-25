import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Covid19Page from './pages/Covid19Page';
import ProgrammingPage from './pages/Programming';
import NavbarComponent from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} /> {/* cuma buat cek hasil slicing */}
        <Route path='/covid' element={<Covid19Page />} /> 
        <Route path='/programming' element={<ProgrammingPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
