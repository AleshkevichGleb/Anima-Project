import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import "./index.css";
import Header from './components/Header/Header';
import { navLinks } from './data/navLinks';
import Error from './pages/Error/Error';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        {navLinks.map(link => 
          <Route key = {link.path} path={link.path} element = {<link.element/>}/>  
        )}
        <Route path='*' element = {<Error/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
