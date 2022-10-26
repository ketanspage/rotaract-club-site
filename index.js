import React from 'react';
import ReactDOM from 'react-dom';

import {App} from "./App";
import {About} from "./components/About";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Events} from "./components/Events";
import {Board} from './components/Board';
import { Newsletter } from './components/Newsletter';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>   
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/board' element={<Board/>}/>
      <Route path='/newsletter' element={<Newsletter/>}/>
      
    </Routes>
  </BrowserRouter>
);

 

