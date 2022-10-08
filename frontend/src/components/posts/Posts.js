import React from 'react'
//axios
import Axios from 'axios';
//styles
import '../../styles/components/posts/_posts.scss'
//javascript utils

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
            
        </div>
        <div className='post-feed__post'>
            
        </div>
        <div className='post-feed__post'>
            
        </div>
        <div className='post-feed__post'>
            
        </div>
        <div className='post-feed__post'>
            
        </div>
        <div className='post-feed__post'>
            
        </div>
        <div className='post-feed__post'>
            
        </div>
        <div className='post-feed__post'>
            
        </div>
        <div className='post-feed__post'>
            
        </div>
        <div className='post-feed__post'>
            
        </div>
        <div className='post-feed__post'>
            
        </div>
        <div className='post-feed__post'>
            
        </div>
        <div className='post-feed__post'>
            
        </div>
        <div className='post-feed__post'>
            
        </div>
        <div className='post-feed__post'>
            
        </div>
        <div className='post-feed__post'>
            
        </div>
        <div className='post-feed__buffer-bottom'></div>
     </div>
    </>
  )
}

export default Posts