import React from 'react'
//axios
import Axios from 'axios';
//styles
import '../../styles/components/buttons/_like-functionality.scss'
import '../../styles/components/posts/_posts.scss';
//assets
import skyline from '../../assets/images/skyline.jpg';
//mui
import { Button, Avatar} from '@mui/material';
//icons
//mui icons
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'
import { flexbox } from '@mui/system';

function Posts() {
    //retrieve a list of posts from the DB  
    let token = sessionStorage.getItem('jwt');
    let userIdStorage = JSON.parse(sessionStorage.getItem('userId'));
    console.log('userIdStorage log', userIdStorage);
    //axios post
    Axios.get(`http://localhost:3000/posts?userId=${userIdStorage}`, 
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    ).then(function(response) {
        console.log(response);
    }).catch(function(error)  {
        console.log(error);
    })
   
    return (
    <>
     <div className='post-feed__parent'>
     <div className='post-feed__buffer-top'  />
        <div className='post-feed__post'>
            <div className='post-parent'>
                <div className='post-topline'>
                    <div className='post-topline__avatar-name'>
                        <Avatar  sx={{ width: 30, height: 30, margin: 'auto' }} />
                        <p className='post-topline__username'>user name</p>
                    </div>
                    <p>new</p>
                </div>
                <h4 className='post-title'> This is the post title, and this is what happens if its very long</h4>
                <img className='post-img' alt='alt' src={ skyline } />
                <p className='post-content'> this is the post content. oftentimes this is very long so we'll concatenate it</p>
                <div className='post__bottomline'>
                    <Button variant="text">view post...</Button>
                    <div className='like-functionality-parent'>
                        <div className='like-functionality__up'>
                            <ThumbUpOffAltIcon />
                            <h3> 1 </h3>
                        </div>
                        <div className='like-functionality__down'>
                            <ThumbDownOffAltIcon />
                            <h3> 0 </h3>
                        </div>
                    </div>
                </div>
   
            </div>
        </div>
        <div className='post-feed__buffer-bottom'></div>
     </div>
    </>
  )
}

export default Posts