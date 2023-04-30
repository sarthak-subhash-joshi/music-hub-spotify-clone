import React, { useState } from 'react';
import './Search.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Intro from '../components/Intro';
import Slider from '../components/Slider';
import Playlist from '../components/Playlist'
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Search() {


  // const [artist, setArtist] = useState([]);

  // const searchArtist = async () => {
  //       const data = await response.json();
  //   setArtist(data.artist);
  // };



  const [artist, setArtist] = useState('');
  const [tracks, setTracks] = useState([]);

  const searchTracks = async () => {
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=3738899be2e57225a8c17b21b1e80ce5&format=json`);
    const data = await response.json();
    setTracks(data.toptracks.track);
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
          <NavLink to='/'> <li className='list-item'><i className="fa-solid icon fa-house "></i> Home</li></NavLink>
          <strong><NavLink to='/search'> <li style={{color:'red'}} className='list-item'><i className="fa-solid icon fa-magnifying-glass"></i> Search</li></NavLink>
          </strong>
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

        <div>
        

        <div className="search-container">
        <Form.Control type="text" placeholder="search" value={artist} className='search-field' onChange={e => setArtist(e.target.value)} />
        <Button className='search-button' variant="primary" onClick={searchTracks}>Search</Button>
        </div>


       

  
       <div className="allsearchresults-container row">
       {tracks.map(track => (
          <>

          <div className="search-result-container col-lg-4" key={track.name}>
          <h4>{track.name}</h4>
          <p><span className='listners-span'>Listeners : {track.listeners}</span>   <span>Playcount:121211</span></p>
          <a href={track.url} className='play-btn' > <i className="fa-regular fa-circle-play fa-2xl playicon"></i></a>
          </div>
      
          </>
        ))}
       </div>
  
    </div>

        </div>



        
     </main>
    </div>
  </>
  );
}

export default Search;
