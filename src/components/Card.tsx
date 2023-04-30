import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'

type MusicCardProps = {
  name: string,
  url:string,
  imgURL:string,
  favourite:boolean
};

const MusicCard = ({name,url,imgURL,favourite}: MusicCardProps) => {

  const [status,setStatus]=useState()

  const makeFavourite=()=>{
   alert("making fav")
  }

  const makeNormal=()=>{
    alert("making normal")
  }

  return (
    <>

    <a href={url} style={{textDecoration:'none'}}>
      <Card style={{ width: '14rem' }} className='card-container'>
      <Card.Img variant="top" className='img-top' src={imgURL} />
      <Card.Body>
        <Card.Title className='card-title'>{name}</Card.Title>
        </Card.Body>
    </Card>
    </a>
    {/* { favourite ?<button style={{border:'0',backgroundColor:'white'}} onClick={()=>favourite=false}><i className="fa-solid fa-heart heart-icon fa-xl" ></i></button>  : <button style={{border:'0',backgroundColor:'white'}} onClick={()=>favourite=true}><i className="fa-regular fa-heart heart-icon fa-xl"></i></button>} */}

    
    </>
  )
}

export default MusicCard