import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'


const About = () => {
  const data = [
    {
      bible: "You have seen what i did to the Egyptian and how i carried you on Eagle's wings and brought you to myself. ",
     verse: "Exodus 19:4" 
    },
    {
      bible: "..They spread their wings, and soar like Eagles, They run and don't get tired, they walk amd don't lag behind.",
      verse: "Isaiah 40:31"
    },
    {
      bible: "..Beareth them on her wings.",
      verse: "Deteronomy 32:11"
    }
  ]
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    
    <div id='about' className="container about-sect">
      
        <h2>About Us</h2>
        <span className="line"></span>
        <p>We are a Vibrant community of believers who are passionate about our faith and the power of the Holy spirit. Our worship servuces are filled with joyful singing, dynanic preaching and heartfelt prayers. Our vhurch is commited to serving our local community through various outreach programs. Join us as we grow in our relationship with God</p>
        <Slider {...settings}>
       
          {data.map((item, index)=>(
           <div className='main-content-slider bible-slider' key={index}>
            <div className='content-slider bible-verse' key={index}>
              <h4>{item.bible}</h4>
              <p>{item.verse}</p>
              </div>
            </div>
          ))}
        </Slider>

       


    
    </div>
    
     
  )
}

export default About