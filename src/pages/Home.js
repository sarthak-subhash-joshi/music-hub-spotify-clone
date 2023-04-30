import React, { useState,useEffect } from 'react';
import './Home.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Playlist from '../components/Playlist'
import { NavLink } from 'react-router-dom';


function Home() {

  const [artists, setArtists] = useState([]);


  const searchArtists = async () => {
    const response = await fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=3738899be2e57225a8c17b21b1e80ce5&format=json');
    const data = await response.json();
    setArtists(data.artists.artist);
  };


  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
  <>
   <div className="app">
      <nav className={`sidebar ${showSidebar ? 'show' : ''}`}>
        <ul>
          <h1>Music Hub</h1>
         <strong> <NavLink to='/'> <li style={{color:'red'}} className='list-item'><i  className="fa-solid icon fa-house  "></i> Home</li></NavLink></strong>
          <NavLink to='/search'> <li className='list-item'><i className="fa-solid icon fa-magnifying-glass"></i> Search</li></NavLink>
          <NavLink to='/favourite'>  <li className='list-item'><i className="fa-solid icon fa-heart"></i> Favourite</li></NavLink>
          <NavLink to='/playlists'>  <li className='list-item'><i className="fa-solid icon fa-circle-play "></i> Playlists</li></NavLink>
          <button className='cross-button' onClick={toggleSidebar}><i className="fa-solid fa-xmark fa-2xl"></i></button>
        </ul>
      </nav>
      <header className="header">
        <button className='menu-btn' onClick={toggleSidebar}><i class="fa-solid fa-bars fa-2xl"></i></button>
       
      </header>
      <main className="main">
        <Intro/>

        <div className="music-container-main">
          <h3 className='music-type-lable'>Latest</h3>
          <Slider/>
          <hr />

          <h3 className='music-type-lable'>Music Hub Playlists</h3>
          <Playlist/>
          <hr />
      
        </div>


        <Footer/>
        
     </main>
    </div>
  </>
  );
}

export default Home;
