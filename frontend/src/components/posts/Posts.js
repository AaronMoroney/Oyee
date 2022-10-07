//react 
import React from 'react'
//styles
import '../../styles/components/posts/_posts.scss'


function Posts() {

  /*
  ** | LOGIC for dynamic posts feed
  */

  /*
  let token = sessionStorage.getItem('jwt');
  let userIdStorage = JSON.parse(sessionStorage.getItem('userId'));

  Axios.get('http://localhost:3000/posts', {
    userId: userIdStorage
    },
    {
      headers: {
        'Authorization': `Bearer ${token}`
    },
  }).then(function(response) {
    console.log(response);
  }).catch(function(error)  {
    console.log(error);
  })
  */
  
  return (
    <>
     <div className='post-feed__parent'>
     <div className='post-feed__buffer-top'  />
        <div className='post-feed__post'>
            
        </div>
      
        <div className='post-feed__buffer-bottom'></div>
     </div>
    </>
  )
}

export default Posts