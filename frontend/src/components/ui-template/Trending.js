import React from 'react'
//styles
import '../../styles/_home-feed.scss'
//mui 
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
//assets
import gravelbike from '../../assets/images/gravelbike.jpg'

function Trending() {
  return (
    <div className='home-feed__trending'>
      <h3 className='trending'> WELCOME,  </h3>
      <Card >
        <CardMedia 
          component="img"
          height="140"
          src = { gravelbike }
          alt='skyline'
        />
        <CardContent>
          <h4> 
            Your Social Network 😇
          </h4>
          <p> Here at Groupomania we encourage everlasting and empowering relationships between you and your colleagues.</p>
          <p>This is a safe forum for you to connect with others, share your interests and plan your next adventure.  </p>
          <p className='home-feed__trending-bold'>Stay tuned for updates and feature rollouts. 😉</p>
        </CardContent >
      </Card>
    </div>
  )
}

export default Trending