import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header'
import Home from './components/Home'
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';
import {useRef} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export function App() {
   
  return (
    <div >
      <Navbar/>
      <Home/>
      <Footer/>     
    </div>
  );
}


//export default App;
