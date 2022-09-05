//react
import React from 'react'
//components
import Feed from '../components/ui-template/Feed'
import HomeProfileTemp from '../components/ui-template/HomeProfileTemp'
import Trending from '../components/ui-template/Trending'
import Copyright from '../components/copyright/Copyright'
import AddBackToTop from '../components/buttons/AddBackToTop';
//styles
import  '../styles/_hero-bcg.scss'
import '../styles/_home-feed.scss'
import '../styles/components/buttons/_addBackToTop.scss'

function HomePage() {
  return (
    <div>
      <HomeProfileTemp />
      <div className='home-feed'>
        <div className='home-feed__left'>
         <Feed />
        </div>
        <div className='home-feed__right'>
          <Trending />
          <div className='addBackToTop'>
            <AddBackToTop />
          </div>
          <Copyright />
        </div>
      </div>
    </div>
  )
}

export default HomePage