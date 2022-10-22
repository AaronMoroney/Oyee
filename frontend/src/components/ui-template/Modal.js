import React, { useState }from 'react';
//axios
import Axios from 'axios';
//assets
import typewriter from '../../assets/images/typewriter.jpg';
//styles
import '../../styles/components/modals/_modal.scss';
//mui
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
//mui icons
import CloseIcon from '@mui/icons-material/Close';
//theme
import { createTheme, ThemeProvider, IconButton} from '@mui/material';
//icons
import PhotoCamera from '@mui/icons-material/PhotoCamera'

const theme = createTheme ({
    palette: {
        button: {
        primary: {
            main: '#091D39',
            contrastText: '#FFFFFF', 
        },
        secondary: {
            main: '#D44651',
        },
        confirm: {
            main: '#2FD381',
            contrastText: '#FFFFFF',
        },
        },
        appbar: {
        primary: {
            main: '#091D39',
            contrastText: '#FFFFFF'
        }
        }
    },
});

export const Modal = ({showModal, setShowModal }) => {

    //get values from local storage
    let token = sessionStorage.getItem('jwt');
    let userIdStorage = JSON.parse(sessionStorage.getItem('userId'));
    let userName = sessionStorage.getItem('userName');

    //set states to store values
    const [postTitle, setPostTitle] = useState(false);
    const [postContent, setPostContent] = useState(false);

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
        setFilename(e.target.files[0].name); 
        console.log(e.target.files[0].name); 
    };

    //file upload
    const [file, setFile] = useState();
    const [filename, setFilename] = useState();

    const formData = new FormData();
    formData.append('userId', userIdStorage); 
    formData.append('userName', userName); 
    formData.append('postTitle', postTitle); 
    formData.append('postContent', postContent); 
    formData.append('file', file ); 
    formData.append('filename', filename); 
    console.log(formData);

    const createPost = () => {
        Axios.post('http://localhost:3000/posts', formData,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            }
        }).then(function(response) {
            console.log(response);
        }).catch(function(error)  {
            console.log(error);
        })
    };

    return (
        <>
        {showModal ? 
            <ThemeProvider theme={theme}>
                <>
                    <div className='modal-wrapper'>
                        <div className='modal-parent'>
                            <div className='modal-parent__left'>
                                <img className = 'modal-left__img' src={typewriter} alt='oldschool typewriter' />
                            </div>
                            <div className='modal-parent__right'>
                                <div className='modal-form__parent'>
                                    
                                    <div className='modal-form__create-close'>
                                        <h2 className='modal-form__heading'>Create a Post 😇 </h2>
                                        <CloseIcon onClick={() => setShowModal(prev=>!prev)} sx={{marginTop: 1,}} />
                                    </div>

                                    <TextField 
                                    id = "outlined-basic" 
                                    name = 'postTitle'
                                    label = "Add A Title" 
                                    variant = "outlined" 
                                    className = 'login-form' 
                                    sx = {{
                                        marginBottom: 2,
                                        marginTop: 2,
                                    }}
                                    onChange = {(e) => {
                                       setPostTitle(e.target.value);
                                    }}
                            
                                    />
                                    <div className='modal-form-file-upload__parent'>
                                        <h4 className='upload-a-file'>UPLOAD AN IMAGE - required</h4>

                                        <IconButton color="primary" aria-label="upload picture"  component="label"  >
                                                <input
                                                alt='user defined image' 
                                                hidden accept="image/*" 
                                                type='file' 
                                                onChange = { saveFile }
                                                name='image'
                                                />
                                                <PhotoCamera />
                                        </IconButton>
                                    </div>
                                    <TextField
                                    id='outlined-multiline-static'
                                    label='Post Body'
                                    name = 'postContent'
                                    multiline 
                                    rows={8}
                                    className = 'login-form'
                                    sx = {{
                                        marginTop: 1,
                                    }} 
                                    onChange = {(e) => {
                                        setPostContent(e.target.value);
                                    }}
                                    />
                                </div>
                                <Paper 
                                sx={{ bgcolor: 'button.confirm.main', color: 'button.confirm.contrastText', width: '150px', height: '25px', margin: 'auto' }}
                                onClick = {() => { createPost(); setShowModal(prev=>!prev) }}
                                > SHARE POST </Paper>
                            </div>
                        </div>
                    </div> 
                </>
            </ThemeProvider>
        : null }
        </>
    )
}

export default Modal