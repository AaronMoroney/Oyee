import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//axios
import Axios from 'axios';
//styles
import '../../styles/components/buttons/_like-functionality.scss'
import '../../styles/components/posts/_posts.scss';
//mui
import { Button, Avatar} from '@mui/material';
//icons
//mui icons
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'


function Posts(props) {
    /*
    ** | MAP THE DATA FROM DB ONTO POSTS |
    */
    const [data, setData] = useState([]);

    /*
    ** | STORAGE |
    */

    let token = sessionStorage.getItem('jwt');
    let userIdStorage = JSON.parse(sessionStorage.getItem('userId'));
    
    /*
    ** | GET ALL  & MAP |
    */

    useEffect(() => {
        //axios post
        Axios.get(`http://localhost:3000/posts?userId=${userIdStorage}`, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then(async(response) => {
            setData(response.data);
            console.log('response.data', response.data);
        });
        }, []);

    return <>
        {data.map((posts) => {
            return <>
                <div className='post-feed__buffer-top'  />
                <div className='post-feed__parent'>

                    <div className='post-feed__post'>
                        <div className='post-parent'>
                           
                            <div className='post-topline'>
                                {/* button / link which brings you to profile page*/ }
                                <Link className='link-global' to='/userprofilepage' state = {{userId: posts.userId}}>
                                    <div className='post-topline__avatar-name'>
                                        <Avatar  sx={{ width: 30, height: 30, margin: 'auto' }} />
                                        <p className='post-topline__username' >  
                                            {posts.userName}
                                        </p>
                                    </div>
                                </Link>
                                {/* end */ }

                                {/* Post read, unread indicator */ }
                                <p>new</p>
                            </div>

                            <h4 className='post-title' > {posts.postTitle}</h4>
                            <img className='post-img' alt='alt' src={ posts.imageContent} />
                            <p className='post-content' > {posts.postContent} </p>
                            <div className='post__bottomline'>
                                <Link  className='link-global' to = {{
                                    pathname: '/postPage',
                                    id: posts.id
                                }}>
                                    <Button  variant="text">
                                        view post
                                    </Button>
                                </Link>
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
                    <div className='post-feed__buffer-bottom' />
                </div>
            </>
        })}
    </>;
}

export default Posts;