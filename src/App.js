import { Routes, Route } from 'react-router-dom';
import './App.css';
import "./index.css";
import Header from './components/Header/Header';
import { routes } from './data/navLinks';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherFetch } from './reducers/weatherSlice';
import Loader from './common/Loader/Loader';
import { setState } from './reducers/productsSlice';
import ArrowToTop from './common/arrowToTop/ArrowToTop';


function App() {
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.weather);

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('basket')) || [];
    if(storage !== null || storage.length) {
      dispatch(setState(storage));
    }
    
    dispatch(getWeatherFetch())
  }, [])

  if(isLoading) {
    return <Loader/>
  }

  return (
    <>
      <Header/>
        <Routes>
          {routes.map(link => 
            <Route key = {link.path} path={link.path} element = {<link.element/>}/>  
          )}
        </Routes>
        <ArrowToTop/>
      <Footer/>
    </>
  );
}

export default App;
