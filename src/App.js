import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import "./index.css";
import Header from './components/Header/Header';
import { navLinks, routes } from './data/navLinks';
import Error from './pages/Error/Error';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherFetch } from './reducers/weatherSlice';
import Loader from './common/Loader/Loader';
import { setState } from './reducers/productsSlice';


function App() {
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.weather);
  const {products} = useSelector(state => state.products);

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
      <Footer/>
    </>
  );
}

export default App;
