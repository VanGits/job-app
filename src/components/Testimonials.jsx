import React, { useEffect } from "react";
import "../styles/Testimonials.css";
import waves from "../assets/wavesOpacityFinal.svg";

import Slider from "react-slick";
import AOS from "aos"
import "aos/dist/aos.css"



const Testimonials = () => {
    useEffect(() => {
        AOS.init({duration:1000})
      }, [])
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
   
    centerMode: true,
    
    dotsClass: "slick-dots slick-thumb",
  };

  return (
    <div className="Testimonials">
      <div className="wave-wrapper">
        <img src={waves} alt="" />
      </div>
    

      <div className="testimonials-content" data-aos="fade-up">
        <h1>Testimonials</h1>


        <Slider {...settings} className="testimonial-slider">
          <div className="testimonial">
            <h1>1</h1>
          </div>
          <div className="testimonial">
            <h1>2</h1>
          </div>
          <div className="testimonial">
            <h1>3</h1>
          </div>
          <div className="testimonial">
            <h1>4</h1>
          </div>
          <div className="testimonial">
            <h1>5</h1>
          </div>
        </Slider>
       
       

     
        
        
      </div>
   
    </div>
  );
};

export default Testimonials;
