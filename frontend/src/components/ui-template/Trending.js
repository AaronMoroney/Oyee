import React from 'react'
//styles
import '../../styles/_home-feed.scss'
import '../../styles/components/buttons/_like-functionality.scss'
//mui 
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
//mui icons
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'

//assets
import skyline from '../../assets/images/skyline.jpg'

function Trending() {
  return (
    <div className='home-feed__trending'>
      <h2 className='trending'> T R E N D I N G  🔥 🔥 </h2>
      <Card >
        <CardMedia 
          component="img"
          height="140"
          src = { skyline }
          alt='skyline'
        />
        <CardContent>
          <h3> 50km Gravel Adventure Cycle - @ The Burren. </h3>
          <p> 
            This saturday, the gravel bike adventure club will be cycling the burren, Co. Clare!
            all medium - advanced riders welcome!
          </p>
          <div className='like-functionality-parent'>
            <div className='like-functionality__up'>
              <ThumbUpOffAltIcon />
              <h3> 1 </h3>
            </div>
            <div className='like-functionality__down'>
              <ThumbDownOffAltIcon />
              <h3> 0 </h3>
            </div>
          </div>
        </CardContent >
      </Card>
    </div>
  )
}

export default Trending