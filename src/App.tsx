import React, { useState,useEffect } from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

// pages
import Home from './pages/Home';
import Search from './pages/Search';
import Favaorite from './pages/Favaorite';
import Playlists from './pages/Playlists';
// import ScrollToTop from './pages/ScrollToTop';

const App=()=>{

  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>} />
        <Route path='/search' element={<Search/>}/>
        <Route path='/favourite' element={<Favaorite/>} />
        <Route path='/playlists' element={<Playlists/>} />
      </Routes>
    </BrowserRouter>
  );


}

export default App;