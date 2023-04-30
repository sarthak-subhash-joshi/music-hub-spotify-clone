import React from 'react'
import {NavLink} from 'react-router-dom'

const Playlists = () => {
  return (
    <>
      <div style={{height:"100vh",display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <h1  style={{marginBottom:'50px'}}>Comming soon</h1>
      <NavLink to='/' style={{textDecoration:'none'}}> <button className='btn btn-primary'><i style={{marginRight:'10px'}} className="fa-solid fa-arrow-left fa-lg"></i> Go To Home</button> </NavLink>
  
      </div>
    </>
  )
}

export default Playlists