import React, { useState, useEffect } from 'react';
//routerDom
import { useLocation } from 'react-router-dom';
//axios
import Axios from 'axios';
//components
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/ui-template/Hero';
//styles
import '../styles/components/buttons/_like-functionality.scss'
import '../styles/components/posts/_posts.scss';

export const PostPage = (response) => {
    /*
    ** | Data
    */
    const [onePostData, setOnePostData] = useState([]);
    /*
    ** | Storage
    */

    let token = sessionStorage.getItem('jwt');

    /*
    ** | props
    */
    const location = useLocation();
    const { id } = location.state;
    console.log( 'frontend id', id );

    /*
    ** | GET ONE POST |
    */

    useEffect(() => {
        //axios post
        Axios.get(`http://localhost:3000/posts/postpage/${id}`, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then(async(response) => {
            setOnePostData(response.data);
            console.log(response.data)
        });
        },[] );

    return (
        <>
            <Navbar/>
            <Hero />
            <div className='post-feed__post-one-post'>
                <div className='post-parent__one-post'>
                    <div className='post-topline'>
                        <div className='post-topline__avatar-name'>
                            <p className='post-topline__username' >  
                                {onePostData.userName}
                            </p>
                        </div>
                    </div>
                    <h4 className='post-title' > {onePostData.postTitle}</h4>
                    <img className='post-img' alt='alt' src={ onePostData.imageContent} />
                    <p className='post-content__one-post' > {onePostData.postContent} </p>
                </div>
            </div>
           
        </>
  )
}

export default PostPage