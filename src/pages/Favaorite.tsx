import React, { useState, useEffect } from "react";
import "./Favourite.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Playlist from "../components/Playlist";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";


interface Artist {
  id: number;
  name: string;
  favorite: boolean;
  image:string;
}

function Favourite(): JSX.Element {
  const [artists, setArtists] = useState<Artist[]>([
    { id: 1, name: "Taylor Swift", favorite: false,image: "https://tse3.mm.bing.net/th?id=OIP.D65O5SA_J-cyzpYDhTdptQHaE5&pid=Api&P=0"},
    { id: 2, name: "Rihanna", favorite: false, image: "https://tse1.mm.bing.net/th?id=OIP.OB4ZN7VsuFtHUSujTWRmPAHaKh&pid=Api&P=0" },
    { id: 3, name: "Frank Ocean", favorite: false,image:"https://tse1.mm.bing.net/th?id=OIP.E51G47cJqBBofsMmmL9qcQHaE6&pid=Api&P=0" },
  ]);

  const [favorites, setFavorites] = useState<Artist[]>([]);

  const toggleFavorite = (id: number): void => {
    setArtists((prevArtists) =>
      prevArtists.map((artist) => {
        if (artist.id === id) {
          return { ...artist, favorite: !artist.favorite };
        }
        return artist;
      })
    );
  };

  const addToFavorites = (id: number): void => {
    const artist = artists.find((artist) => artist.id === id);
    if (artist && !favorites.some((favorite) => favorite.id === id)) {
      setFavorites((prevFavorites) => [...prevFavorites, artist]);
      toggleFavorite(id); // to set the favorite property of the artist to true
    }
  };

  const removeFromFavorites = (id: number): void => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== id)
    );
    toggleFavorite(id); // to set the favorite property of the artist to false
  };

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className="app favourites-main-container">
        <nav className={`sidebar ${showSidebar ? "show" : ""}`}>
          <ul>
            <h1>Music Hub</h1>
            <NavLink to="/">
              {" "}
              <li className="list-item">
                <i className="fa-solid icon fa-house "></i> Home
              </li>
            </NavLink>
            <NavLink to="/search">
              {" "}
              <li className="list-item">
                <i className="fa-solid icon fa-magnifying-glass"></i> Search
              </li>
            </NavLink>
           <strong>
           <NavLink to="/favourite">
              {" "}
              <li style={{color:'red'}} className="list-item">
                <i className="fa-solid icon fa-heart"></i> Favourite
              </li>
            </NavLink>
           </strong>
            <NavLink to="/playlists">
              {" "}
              <li className="list-item">
                <i className="fa-solid icon fa-circle-play "></i> Playlists
              </li>
            </NavLink>
            <button className="cross-button" onClick={toggleSidebar}>
              <i className="fa-solid fa-xmark fa-2xl"></i>
            </button>
          </ul>
        </nav>
        <header className="header">
          <button className="menu-btn" onClick={toggleSidebar}>
            <i className="fa-solid fa-bars fa-2xl"></i>
          </button>
        </header>
        <main className="main main-container">
          <Intro />

          <div className="App-main">
            <h3>Artists</h3>

            <div className="favourite-main-container row">
              {artists.map((artist) => (
                <>
                  <div className="col-lg-4">
                    <Card
                      style={{ width: "14rem", textAlign: "center" }}
                      className="card-container "
                    >
                      <Card.Img variant="top" className="img-top" src={artist.image} />
                      <Card.Body>
                        <Card.Title className="card-title">
                          {artist.name}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                    {artist.favorite ? (
                      <i className="fa-solid fa-heart heart-icon fa-xl"></i>
                    ) : (
                      <button
                        style={{ border: "0", backgroundColor: "white" }}
                        onClick={() => addToFavorites(artist.id)}
                      >
                        <i className="fa-regular fa-heart heart-icon fa-xl"></i>
                      </button>
                    )}
                  </div>
                </>
              ))}
            </div>

          {  favorites && <h3>Favorites</h3>}
            <div className="favourite-main-container row">
              {favorites.map((favorite) => (
                <div className="col-lg-4">
                  <Card
                    style={{ width: "14rem", textAlign: "center" }}
                    className="card-container "
                  >
                    <Card.Img variant="top" className="img-top" src={favorite.image} />
                    <Card.Body>
                      <Card.Title className="card-title">
                        {" "}
                        {favorite.name}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <button
                    style={{ border: "0", backgroundColor: "white" }}
                    onClick={() => removeFromFavorites(favorite.id)}
                  >
                    <i className="fa-solid fa-trash fa-xl"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>


    </>
  );
}

export default Favourite;
