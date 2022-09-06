//react
import React from 'react'
//components
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/ui-template/Hero'
import ProfPicNameTitle from '../components/ui-template/ProfPicNameTitle'


function ProfilePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProfPicNameTitle />
    </div>
  )
}

export default ProfilePage