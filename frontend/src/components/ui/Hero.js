import React from 'react'
import skyline from '../../assets/images/skyline.jpg'
//styles
import '../../styles/_hero-bcg.scss'

function Hero() {
  return (
    <div>
        <img src={skyline} alt ='corporate building city skyline' className ='hero-backdrop__image' />
            <div className='hero-backdrop__overlay'>
            <h2 className='home-bcg_title'> Drinks tonight?</h2>
            <h2 className='home-bcg_subtitle'> Sorted. </h2>
        </div>
    </div>
  )
}

export default Hero