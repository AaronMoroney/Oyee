//react
import React, { useState, useEffect } from 'react'
import { useLocation  } from "react-router-dom";
//axios
import Axios from 'axios';
//components
import Avatar from '@mui/material/Avatar';
import LogoutButton from '../components/buttons/LogoutButton';
import DeleteButton from '../components/buttons/DeleteButton';
//mui
import Card from '@mui/material/Card';
//styles
import '../styles/components/profpicnametitle/_profpicnametitle.scss'

function ProfilePage() {
  const [userData, setUserData] = useState([]);

  /*
  ** | STORAGE |
  */

  let userIdStorage = JSON.parse(sessionStorage.getItem('userId'));
  //to display buttons or not
  const location = useLocation();
  
  /*
  ** | GET |
  */

  useEffect(() => {
    //axios post
    Axios.get(`http://localhost:3000/auth/profilepage/${userIdStorage}`, 
    ).then(async(response) => {
      setUserData(response.data);
      console.log(response.data);
    }).catch((error)=>{console.error(error);});
    },[]);

    return <>
      <div className='employee-parent'>
          <Avatar sx={{ width: '190px', height: '190px', borderRadius: '5px', backgroundColor: 'white'}}>
            <img className='employee-info__image' src={userData.userImageContent} alt='profile'/>
          </Avatar>
          <div className='employee-info-parent'>
              <h6 className = 'employee-info__gender'> {userData.userGender}</h6>
              <h2 className = 'employee-info__name'> {userData.userName}</h2>
          </div>
      </div>
      <div className=''>
        <Card sx={{  width: '80%', borderRadius: '10px', margin: '2% 10% 0% 10%' }}>
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
          
          { location.pathname === '/profilepage' ? (
          <div className='confirm-delete-button-parent'>
            <DeleteButton />
            <LogoutButton />
          </div>
          ) :  <span></span>  }
        </Card> 
      </div>
    </>
}
export default ProfilePage