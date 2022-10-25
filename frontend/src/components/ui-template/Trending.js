import React from 'react'
//styles
import '../../styles/_home-feed.scss'
import '../../styles/components/copyright/_copyright.scss'
//mui 
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
//assets
import coffee from '../../assets/images/coffee.jpg'

function Trending() {
  return (
    <div className='home-feed__trending'>
      
      <Card >
        <CardMedia 
          component="img"
          height="140"
          src = { coffee }
          alt='skyline'
        />
        <CardContent>
          <h4> 
            Your Social Network 😇
          </h4>
          <p> Build everlasting and empowering friendships between you and your colleagues.</p>
          <p> Connect with others, share your interests or plan next adventure.  </p>
          <p className='home-feed__trending-bold'>Stay tuned for updates and feature rollouts. 😉</p>
        </CardContent >
      </Card>
      
    </div>
  )
}
export default Trending