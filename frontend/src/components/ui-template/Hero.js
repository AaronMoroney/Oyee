//react
import React from 'react'
import { useLocation  } from "react-router-dom";
//assets
import skyline from '../../assets/images/skyline.jpg'
//components
import HeadingText from '../headingText/HeadingText'

function Hero() {
  const location = useLocation();
  return (
    <>
      { location.pathname === '/homepage' ? <HeadingText />  :  null }
      <div>
        <img 
          src={ skyline } alt ='corporate building city skyline' 
          className = {`
            ${location.pathname === '/homepage' ? 
            'hero-backdrop-image__feed' 
            : 'hero-backdrop-image__profile' } 
          `}
        />
        <div className = {`${location.pathname === '/homepage' ? 'hero-backdrop-overlay__feed' : 'hero-backdrop-overlay__profile' }`} />
      </div>
    </>
  )
}
export default Hero