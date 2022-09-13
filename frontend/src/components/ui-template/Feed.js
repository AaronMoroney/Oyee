import Posts from '../posts/Posts'
import React from 'react'

function Feed() {
  return (
    <div className='home-feed__feed'>
      <div>
        <Posts />
      </div>
    </div>
  )
}

export default Feed