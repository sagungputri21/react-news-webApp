import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Covid19Page from './pages/Covid19Page';
import ProgrammingPage from './pages/Programming';
import NavbarComponent from './components/Navbar/Navbar';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/covid' element={<Covid19Page />} /> 
        <Route path='/programming' element={<ProgrammingPage />} /> 
        <Route path='/search' element={<SearchPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
