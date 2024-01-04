import Posts from '../posts/Posts'
import React from 'react'

function Feed() {
  return (
    <main className='home-feed__feed'>
      <div>
        <Posts />
      </div>
    </main>
  )
}
export default Feed