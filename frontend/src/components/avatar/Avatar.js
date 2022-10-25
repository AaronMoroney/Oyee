//React
import React, { useState, useEffect} from 'react';
//mui
import Avatar from '@mui/material/Avatar';
//axios
import Axios from 'axios'
//styles
import '../../styles/components/avatar/_avatar.scss';

function AvatarComponent() {

    const [userData, setUserData] = useState([]);
    let userIdStorage = JSON.parse(sessionStorage.getItem('userId'));

    useEffect(() => {
        Axios.get(`http://localhost:3000/auth/profilepage/${userIdStorage}`, 
        ).then(async(response) => {
            setUserData(response.data);
            console.log(response.data);
        }).catch((error)=>{console.error(error);});
        },[]);
    return (
        <>
            <Avatar >
                <img className ='avatar__image'src={userData.userImageContent} />
            </Avatar> 
        </>
    )
}

export default AvatarComponent