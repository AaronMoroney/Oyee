//react
import React from 'react'
//styles
import '../styles/_home-feed.scss'
//components
import Navbar from '../components/navigation/Navbar'
import SecondaryNav from '../components/navigation/SecondaryNav'
import Feed from '../components/widgets/Feed'
import Stocks from '../components/widgets/Stocks'
import ChatBot from '../components/widgets/ChatBot'
import DirectMessaging from '../components/widgets/DirectMessaging'

function HomePage() {
  return (
    <>
    <div className='dashboard'>
      <nav className='dashboard-top'>
        <Navbar />
      </nav>
      <div className='dashboard-bottom'>
        <div className='dashboard-bottom__grid'>
          <SecondaryNav />
          <Feed />
          <aside className="constant-aside">
            <Stocks />
            <ChatBot />
            <DirectMessaging />
          </aside>
        </div>
      </div>
    </div>
    </>
  )
}
export default HomePage