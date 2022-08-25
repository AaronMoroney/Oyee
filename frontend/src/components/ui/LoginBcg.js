import '../../styles/_backdrop.scss';
import skyline from '../../assets/images/skyline.jpg'
import React from 'react'
import whitelogo from '../../assets/logos/iconleftwhite.svg'
//test comment
function loginBcg() {
  return (
    <div>
        <nav className='login-navbar'>
            <img src={whitelogo} alt ='groupomania logo in white' className='login-navbar-logo'></img>
        </nav>
        <div className='login-card__parent'>
          <div className='login-card'>
              
          </div>
        </div>
        <div>
            <img src={skyline} alt ='corporate building city skyline' className ='login-backdrop-image' /> 
            <div className='login-backdrop-overlay'></div>
        </div>
    </div>
  )
}

export default loginBcg

