import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import IntoImg from '../assets/intro.png'
import './Intro.css'


const Intro = () => {
  return (
    <>
   
    <Carousel >
      <Carousel.Item interval={3000} >
        <img
          className="d-block w-100"
          src={IntoImg}
          alt="First slide"
          style={{height:'300px',width:'100%',margin:'0'}}
        />

      </Carousel.Item>
      

      <Carousel.Item interval={3000} >
        <img
         className="d-block w-100"
         src="https://cdn.pixabay.com/photo/2018/08/01/18/38/violin-3577816__340.jpg"
          alt="Second slide"
          style={{height:'300px',width:'100%',margin:'0'}}
        />
        <Carousel.Caption>
          <h3>Feel the music with</h3>
          <h3>Music Hub</h3>
        </Carousel.Caption>
      </Carousel.Item>
    

      <Carousel.Item interval={3000} >
        <img
         className="d-block w-100"
         src="https://cdn.pixabay.com/photo/2017/03/07/14/58/disk-2124210__340.jpg"
          alt="Third slide"
          style={{height:'300px',width:'100%',margin:'0'}}
        />
          <Carousel.Caption>
          <h3> Discover the power of music with </h3>
          <h3>Music Hub</h3>
        </Carousel.Caption>
      </Carousel.Item>
     

    </Carousel>

    </>
  )
}

export default Intro

