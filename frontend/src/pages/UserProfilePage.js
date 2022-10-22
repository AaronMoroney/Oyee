//react
import React, { useState, useEffect } from 'react'
//routerDom
import { useLocation } from 'react-router-dom';
//axios
import Axios from 'axios';
//components
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/ui-template/Hero';
import Avatar from '@mui/material/avatar';
import LogoutButton from '../components/buttons/LogoutButton';
import DeleteButton from '../components/buttons/DeleteButton';
//mui
import Card from '@mui/material/Card';
//styles
import '../styles/components/profpicnametitle/_profpicnametitle.scss'

export const ProfilePage = (response) => {
  const [userData, setUserData] = useState([]);
  
  /*
  ** | STORAGE |
  */

  let userIdStorage = JSON.parse(sessionStorage.getItem('userId'));
  //to go to the specified user
  const location = useLocation();
  const { userId } = location.state

  /*
  ** | GET |
  */

  useEffect(() => {
    //axios post
    Axios.get(`http://localhost:3000/auth/userprofilepage/${userId}`, 
    ).then(async(response) => {
      setUserData(response.data);
      console.log(response.data);
    });
    },[]);

    return <>
      <div>
        <Navbar />
        <Hero />
      </div>
      <div className='employee-parent'>
          <Avatar sx={{ width: '190px', height: '190px', borderRadius: '5px'}}>
            <img className='employee-info__image' src={userData.userImageContent}/>
          </Avatar>
          <div className='employee-info-parent'>
              <h6 className = 'employee-info__gender'> {userData.userGender}</h6>
              <h2 className = 'employee-info__name'> {userData.userName}</h2>
          </div>
      </div>
      <div className=''>
        <Card sx={{  width: '80%', borderRadius: '10px', margin: '5% 10% 0% 10%' }}>
          <div className='about-employee-card'>
            <h2 className='about-employee'> About me 💫 </h2>
            <hr  className='about-employee__hr'/>
            <h3 className='about-employee__heading'>  Company title </h3>
              <div className='about-employee-list__parent'>
              <p>{userData.userCompanyPosition}</p>
              </div>
        
            <h3 className='about-employee__heading'> Contact Details 😇 </h3>
              <div className='about-employee-list__parent'>
                <p> Email: {userData.userEmail} </p>
              </div>
          </div>
          { userId === userIdStorage ? (
          <div className='confirm-delete-button-parent'>
            <LogoutButton />
            <DeleteButton />
          </div>
          ) :  null  }
        </Card> 
      </div>
    </>
}

export default ProfilePage