import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/point.png'
import arrow_icon from '../Assets/next.png'
import hero_image from '../Assets/photo5.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
    <div> 
      <div className="hand-hand-icon">
        <p>New</p>
        <img src={hand_icon} alt=""/>
      </div>
      <p>Collections</p>
      <p>For Everyone</p>
      </div> 
      <div className="hero-latest-btn">
        <div>Latest Collections</div>
        <img src={arrow_icon} alt=""/>
      </div>
    </div>
    <div className="hero-right">
        <img src={hero_image} alt=""/>
    </div>
    </div>
  )
}

export default Hero
