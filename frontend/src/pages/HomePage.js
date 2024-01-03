//react
import React from 'react'
//styles
import '../styles/_home-feed.scss'
import '../styles/components/buttons/_addBackToTop.scss'
//mui
import Avatar from '@mui/material/Avatar';

function HomePage() {
  return (
    <>
      <div className='home-feed'>
        <nav className='home-feed__top'>
          {/* these will be a components */}
          <div className='top-background'>
            <img className='logo' alt='logo'>
              
            </img>
            <Avatar>

            </Avatar>
          </div>
          <div  className='top-background__widgets'>
            {/* these will be  smaller componentscomponents */}
            <section className=''></section>
            <section className=''></section>
            <section className=''></section>
            <aside className=''></aside>
          </div>
        </nav>
        
        <div className='home-feed__bottom'>
          {/* these will be  smaller componentscomponents */}
          <main className="content-feed">
          {/* The feed that changes, potentially using React Router or similar */}
          </main>

          <aside className="constant-aside">
            {/* Content for the aside that remains constant */}
          </aside>

          <div className='DM'>

          </div>
          {/* ARIA (Accessible Rich Internet Applications) enhance accessibility. 
          Such expandable components are typically implemented as a list with collapsible items */}
          <nav aria-label="secondary-navigation">

          </nav>

        </div>
      </div>
    </>
  )
}
export default HomePage