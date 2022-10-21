import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//axios
import Axios from 'axios';
//styles
import '../../styles/components/posts/_posts.scss';
//mui
import { Button, Avatar} from '@mui/material';
//icons
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
//axios
import axios from 'axios';

function Posts(props) {
    /*
    ** | MAP THE DATA FROM DB ONTO POSTS |
    */
    const [data, setData] = useState([]);

    /*
    ** | STORAGE |
    */

    let token = sessionStorage.getItem('jwt');
    let userIdStorage = sessionStorage.getItem('userId');

    /*
    ** | GET ALL DATA & MAP RESULTS |
    */

    useEffect(() => {
        //axios get
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
            //need to set up handling to check if userID isnt already there, so its not added multiple times
            let usersRead = [posts.usersRead];
            
            const usersReadFunction = () => {
                usersRead.push((userIdStorage));
                console.log('usersnowread', usersRead);
                axios.put(`http://localhost:3000/posts/${posts.id}`, 
                {
                    usersRead: usersRead
                },   
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }).then(function(response) {
                    console.log(response);
                }).catch(function(error) {
                   console.log(error);
                })
            }
            
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

                                <div>
                                    {/* if posts > 0, check if usersRead include the userId in session storage */ }
                                    {( data.length > 0 ? 
                                        ( JSON.stringify(usersRead).includes(userIdStorage)
                                        //if it returns true, display this icon
                                        ? < FileDownloadDoneIcon sx={{paddingTop: 2,}} /> 
                                        //if its false, display this 'new' paragraph
                                        : <p >new</p>
                                        ) 
                                    : null )}
                                </div>
                            </div>
                            <h4 className='post-title' > {posts.postTitle}</h4>
                            <img className='post-img' alt='alt' src={ posts.imageContent} />
                            <p className='post-content' > {posts.postContent} </p>
                            <div className='post__bottomline'>

                                {/* button / link which brings you to post page*/ }
                                <Link  className='link-global'  to = '/postpage/' state = {{id: posts.id}}  >
                                    <Button  variant="text" onClick = {usersReadFunction}>
                                        view post
                                    </Button>
                                </Link>
                                {/* end */}
                               
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