import React from 'react'
import  {Slide} from 'react-awesome-reveal'
import {Zoom} from 'react-awesome-reveal'



const Home = () => {
  return (
    <main className='container-fluid home' id='home'>
     
      <div className='home-sect'>
        <Zoom>
        <div className=" home-img">
            <img src='/eagle.jpeg' alt='pic'/> 
          </div>
        </Zoom>
          
         <Slide direction='top'>
         <div className="home-title">
            <h1><span className='no-wrap'>Eagles Wings</span> Church</h1>
            <p>A.K.A</p>
            <h3>Power Life Ministries</h3>
          </div>
          </Slide> 
          
      </div>
        <div className='home-link'>
          <h2>Join us on Eagle's flight</h2>
        </div>     
    </main>
  )
}

export default Home
