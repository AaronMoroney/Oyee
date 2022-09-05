import React from 'react'
import skyline from '../../assets/images/skyline.jpg'
//styles
import '../../styles/_hero-bcg.scss'

function Hero() {
  return (
    <>
      <h2 className='home-bcg_title'> Creating Memories.</h2>
      <h2 className='home-bcg_subtitle'> Together.</h2>
      <div>
        <img src={ skyline } alt ='corporate building city skyline' className ='hero-backdrop__image' />
        <div className='hero-backdrop__overlay' />
      </div>
    </>
  )
}

export default Hero