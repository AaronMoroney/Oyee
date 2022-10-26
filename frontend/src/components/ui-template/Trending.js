import React from 'react'
//styles
import '../../styles/_home-feed.scss'
import '../../styles/components/copyright/_copyright.scss'
//mui 
import CardMedia from '@mui/material/CardMedia'
//assets
import coffee from '../../assets/images/coffee.jpg'

function Trending() {
  return (
    <div className='home-feed__trending'>
        <div className='home-feed__content'>
          <h4> 
            Your Social Network 😇
          </h4>
          <p> Build everlasting and empowering friendships between you and your colleagues.</p>
          <p> Connect with others, share your interests or plan next adventure.  </p>
          <p className='home-feed__trending-bold'>Stay tuned for updates and feature rollouts. 😉</p>
      </div>
    </div>
  )
}
export default Trending