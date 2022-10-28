import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Covid19Page from './pages/Covid19Page';
import ProgrammingPage from './pages/Programming';
import NavbarComponent from './components/Navbar/Navbar';
import SearchPage from './pages/SearchPage';
import SavedPage from './pages/SavedPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/covid' element={<Covid19Page />} /> 
        <Route path='/programming' element={<ProgrammingPage />} /> 
        <Route path='/saved' element={<SavedPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/test' element={<Test />} /> {/* cuma buat cek hasil slicing */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;