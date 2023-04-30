import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import React, { Component,useState} from "react";
import Slider from "react-slick";
import SliderData from '../API/SliderData'
import Card from './Card'

export default class Responsive extends Component {



  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]  
    };


    

    return (
     <>
     <div id="Activities" style={{marginBottom:'20px'}} ></div>
      <div className="slick-container" data-aos="fade-up">
        <Slider  ref={c => (this.slider = c)} {...settings}>
        {SliderData.map((curElem)=>{
        return(
          <>
           <center>
           <Card name={curElem.name} url={curElem.url} imgURL={curElem.image} favourite={curElem.favourite}/>
           </center>
          </>
        );
       })}     
        </Slider>
        <div className="slider-btns-div">
          <button className="button-previous" onClick={this.previous}>
          <i class="fa-solid fa-circle-arrow-left fa-xl"></i>
          </button>
          <button className="button-next" onClick={this.next}>
          <i class="fa-solid fa-circle-arrow-right fa-xl"></i>
          </button>
        </div>
        
        <div style={{height:'60px'}}></div>
      </div>
      
      </>
    );
    
  }
}

