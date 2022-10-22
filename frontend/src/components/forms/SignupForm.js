import React, { useState }from 'react';
//mui components
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom'
//axios
import Axios from 'axios'
//Theme
import { createTheme, ThemeProvider, Button, IconButton } from '@mui/material'
//styles
import '../../styles/components/forms/_login-form.scss'
import '../../styles/components/link/_link-global.scss'
//jwt
import jwt from 'jwt-decode'
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
    },
  },
});



function SignupForm() {
  
    
    /*
    ** | ERROR HANDLING function
    */

    //get access to DOM, always at assigned positions.
    //let nameErrorMsg = document.getElementById('nameErrorMsg');
    //let passwordErrorMsg = document.getElementById('passwordErrorMsg');
    //let positionErrorMsg = document.getElementById('positionErrorMsg');
    //let emailErrorMsg = document.getElementById('emailErrorMsg');
    //let genderErrorMsg = document.getElementById('genderErrorMsg');

    //email
    //let regexEmail = /\S+@\S+\.\S+/g;
    //charectors
    //let regexCharectors = /^[a-zA-Z ]/;
    /*
    //function
    function regexCharectorsResult() {
        regexCharectors.test(userNameStorage.value, userPasswordStorage.value);
    }; 
    */

    /*
    ** | POST REQS function(s)
    */

    let token = localStorage.getItem('jwt');

    //file upload
    const [file, setFile] = useState();
    const [filename, setFilename] = useState();

    //set states to store values
    const [userName, setUserName] = useState(false);
    const [userPassword, setUserPassword] = useState(false);
    const [userEmail, setUserEmail] = useState(false);
    const [userCompanyPosition, setUserCompanyPosition] = useState(false);
    const [userGender, setUserGender] = useState(false);

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
        setFilename(e.target.files[0].name); 
        console.log(e.target.files[0].name); 
    };

    const formData = new FormData();
    formData.append('userName', userName); 
    formData.append('userPassword', userPassword); 
    formData.append('userEmail', userEmail); 
    formData.append('userCompanyPosition',  userCompanyPosition); 
    formData.append('userGender', userGender); 
    formData.append('file', file ); 
    formData.append('filename', filename); 
    console.log(formData);

    const createAccount = () => {
        Axios.post('http://localhost:3000/auth/signup', formData,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            }
        }).then(function(response) {
            login(response);
        }).catch(function(error)  {
            console.log(error);
        })
    };
    
    const login = () => {
        Axios.post('http://localhost:3000/auth/login', {
            userName: userName,
            userPassword: userPassword,
        },
        { headers: {
            'Authorization': `Bearer ${token}`
        }
        }).then(function(response) {
            //send to local storage
            const token = response.data.token;
            sessionStorage.setItem('jwt', token);
            const tokenDecode = jwt(token); //decode
            sessionStorage.setItem('userId', JSON.stringify(tokenDecode.userId));
            const userName = response.data.userName;
            sessionStorage.setItem('userName', userName);
        }).catch(function(error)  {
            console.log(error);
        })
    };
    
    return (
        <ThemeProvider theme={theme}>
            <div>
                <h2>Create Account</h2>
                <div className='signup-form-parent'>
                    <p id='nameErrorMsg'>{/*text goes here*/ } </p>
                    <TextField 
                        id='outlined-username-input' 
                        label='Username' 
                        variant='outlined' 
                        className='login-form'
                        type='text' 
                        sx = {{
                            marginBottom: 2,
                        }} 
                        //capture
                        onChange = {(e) => {
                            setUserName(e.target.value);
                            /*
                            if (userNameStorage.length <= 1 || regexCharectorsResult === false ) {
                                nameErrorMsg.innerText = 'userName must be greater than 5 letters and contain no special charectors';
                            }
                            */
                        }}
                    />
                    
                    <p id='passwordErrorMsg'>{/*text goes here*/}</p>
                    <TextField 
                        id='outlined-password-input'
                        label='Password' 
                        className='login-form'
                        type='password' 
                        sx = {{
                            marginBottom: 2,
                        }}
                        //capture
                        onChange = {(e) => {
                            setUserPassword(e.target.value);
                            /*
                            if (userPasswordStorage.length <= 1 || regexCharectorsResult === false ) {
                                passwordErrorMsg.innerText = 'first name must be greater than 5 letters and contain no special charectors(except spaces where required)';
                            } 
                            */
                        }}
                    />
                    
                    <p id='emailErrorMsg'>{/*text goes here*/}</p>
                    <TextField 
                        id="outlined-email-input" 
                        label="Email" 
                        variant="outlined" 
                        className='login-form' 
                        sx = {{
                            marginBottom: 2,
                        }} 
                        onChange = {(e) => {
                            setUserEmail(e.target.value);
                            /*
                            if (emailStorage.length <= 1 || regexCharectorsResult === false ) {
                                emailErrorMsg.innerText = 'email must be in the format of something@something.com';
                            } 
                            */
                        }}
                    />
                    
                    
                    <div>
                        <TextField 
                            id="outlined-company-input" 
                            label="Company Position" 
                            variant="outlined" 
                            className='login-form' 
                            sx = {{
                                marginBottom: 2,
                                width: 242.5 
                            }} 
                            //capture
                            onChange = {(e) => {
                                setUserCompanyPosition(e.target.value);  
                            }}
                        />
                        
                        <TextField 
                            id="outlined-gender-input" 
                            label="Pronouns" 
                            variant="outlined" 
                            className='login-form' 
                            sx = {{
                                marginBottom: 2,
                                width: 240,
                                marginLeft: 2
                                
                            }} 
                            //capture
                            onChange = {(e) => {
                                setUserGender(e.target.value);
                            }}
                        />
                        <div className='file-upload__parent'>
                            <h4 className='upload-a-file'>UPLOAD AN PROFILE PHOTO - required* </h4>
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
                        
                    </div>
                   
                </div>
                <div>
                    <Link className='link-global' to='/homepage'>
                        <Button varient='contained' 
                            sx={{ 
                            width: '100%', 
                            bgcolor: 'button.secondary.main', 
                            color: 'primary.contrastText', 
                            marginTop: 1, 
                            marginBottom: 2
                            }}
                            //onClick = {() => { createAccount(); regexCharectorsResult();}}
                            onClick = {() => createAccount()}
                            > CREATE ACCOUNT
                        </Button>
                    </Link>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default SignupForm