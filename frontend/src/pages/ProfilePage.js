//react
import React from 'react'
import { useLocation  } from "react-router-dom";
//components
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/ui-template/Hero'
import ProfPicNameTitle from '../components/ui-template/ProfPicNameTitle'
import ConfirmButton from '../components/buttons/ConfirmButton'
import DeleteButton from '../components/buttons/DeleteButton'
//mui
import Card from '@mui/material/Card';

function ProfilePage() {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <Hero />
      <ProfPicNameTitle />
      <div className=''>
        <Card sx={{ height: '500px', width: '80%', borderRadius: '10px', margin: '5% 10% 0% 10%' }}>
          <div className='about-employee-card'>
            <h2 className='about-employee'> About me 💫 ✨ </h2>
            <hr  className='about-employee__hr'/>
            <h3 className='about-employee__heading'> Workplace Skills 📈 </h3>
              <div className='about-employee-list__parent'>
                <p> some text</p>
                <p> some text</p>
                <p> some text</p>
              </div>
            <h3 className='about-employee__heading'> Interests 😇</h3>
              <div className='about-employee-list__parent' >
                <p> some text</p>
                <p> some text</p>
                <p> some text</p>
              </div>
            <h3 className='about-employee__heading'> Contact Details 📱 </h3>
              <div className='about-employee-list__parent'>
                <p> LinkedIn: some text</p>
                <p> Email: some text</p>
              </div>
          </div>
        </Card> 
        { location.pathname === '/profilepage' ? (
        <div className='confirm-delete-button-parent'>
          <ConfirmButton />
          <DeleteButton />
        </div>
        ) :  null  }
        </div>
    </div>
  )
}

export default ProfilePage