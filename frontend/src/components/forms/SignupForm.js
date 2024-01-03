import React, { useState, useRef } from 'react';
//navigate
import { useNavigate } from 'react-router-dom'
//mui components
import TextField from '@mui/material/TextField'
//axios
import Axios from 'axios'
//Theme
import { createTheme, ThemeProvider, Button, IconButton } from '@mui/material'
//styles
import '../../styles/components/forms/_login-form.scss'
import '../../styles/components/link/_link-global.scss'
//jwt
import { jwtDecode } from 'jwt-decode'
//icons
import PhotoCamera from '@mui/icons-material/PhotoCamera'

const theme = createTheme ({
  breakpoints: {
    values: {
        mobile: 350, 
        tablet: 768,
        desktop: 992,
    },
  }, 
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
    ** | POST REQS function(s)
    */
    const token = localStorage.getItem('jwtDecode');

    //file upload
    const [file, setFile] = useState();
    const [filename, setFilename] = useState();

    //set states to store values
    const [userName, setUserName] = useState(false);
    const [userPassword, setUserPassword] = useState(false);
    const [userEmail, setUserEmail] = useState(false);
    const [userCompanyPosition, setUserCompanyPosition] = useState(false);
    const [userGender, setUserGender] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [userError, setUserError] = useState(false);
    //const [emailError, setEmailError] = useState(false);

    //email
    //const regexEmail = /\S+@\S+\.\S+/g;
    //const regexCharectors = /[a-zA-Z]/;

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name); 
    };

    //navigate
    const Navigate =  useNavigate();

    //useREF
    const signupUsernameRef = useRef(null);
    const signupPasswordRef = useRef(null);
                          
    const userNameFunction = (userName) => {
        if (userName.length < 5){
            setUserError('user name must be atleast 5 letters');
            return;
        }
        /*
        //regex
        if(!regexCharectors.test(userName.valueOf)){
            setUserError('user name should contain no special charectors');
            return;
        }
        setUserError('');
        */
        setUserName(userName);
    }

    function userPasswordFunction(password) {
        if (password.length < 5){
            setPasswordError('password must be atleast 5 letters');
            return;
        }
        //regex
        /*
        if(!regexCharectors.test(password.valueOf)){
            setPasswordError('password must should contain no special charectors');
            return;
        }
        setPasswordError('');
        */
        setUserPassword(password);
    }

    const formData = new FormData();
    formData.append('userName', userName); 
    formData.append('userPassword', userPassword); 
    formData.append('userEmail', userEmail); 
    formData.append('userCompanyPosition',  userCompanyPosition); 
    formData.append('userGender', userGender); 
    formData.append('file', file ); 
    formData.append('filename', filename); 

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
            console.error(error);
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
            //add to local storage
            const token = response.data.token;
            sessionStorage.setItem('jwtDecode', token);
            sessionStorage.setItem('userId', JSON.stringify(jwtDecode(token).userId));
            sessionStorage.setItem('userName', response.data.userName);
            //navigate to homepage on successful response
            Navigate('/homepage');
        }).catch(function(error)  {
            console.error(error);
        })
    };
    
    return (
        <ThemeProvider theme={theme}>
            <div>
                <h2>Create Account</h2>
                <div className='signup-form-parent'>
                    <TextField 
                        ref= {signupUsernameRef}
                        id='outlined-username-input' 
                        label='Username' 
                        variant='outlined' 
                        className='signup-username'
                        required
                        type='text' 
                        sx = {{
                            marginBottom: 2,
                        }} 
                        
                        //capture
                        onBlur = {(e) => {
                            userNameFunction(e.target.value);
                        }} 
                    />
                    <p className='error'>{userError}</p>

                    <TextField 
                        ref={signupPasswordRef}
                        id='outlined-password-input'
                        label='Password' 
                        className='signup-password'
                        type='password' 
                        required
                        sx = {{
                            marginBottom: 2,
                        }}
                       
                        onBlur = {(e) => {
                            userPasswordFunction(e.target.value);
                        }}
                    />
                    <p className='error'>{passwordError}</p>
                    
                    <TextField 
                        id="outlined-email-input" 
                        label="Email" 
                        variant="outlined" 
                        className='login-form-email' 
                        sx = {{
                            marginBottom: 2,
                        }} 
                        onBlur = {(e) => {
                            let email = e.target.value;
                            /*
                            if(!regexEmail.test(email)){
                                setEmailError('email must be in the format something@something.something');
                                 return;
                            }
                            setEmailError('');
                            */
                            setUserEmail(email);
                        }}
                    />
                    <p className='error'>{}</p>
                    
                
                    <TextField 
                        id="outlined-company-input" 
                        label="Company Position" 
                        variant="outlined" 
                        className='login-form-company' 
                        sx = {{
                            marginBottom: 5,
                          
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
                        className='login-form-gender' 
                        sx = {{
                            marginBottom: 2,
                            
                        }} 
                        //capture
                        onChange = {(e) => {
                            setUserGender(e.target.value);
                        }}
                    />
                    <div className='file-upload__parent'>
                        <h4 className='upload-a-file'>PROFILE PHOTO - required* </h4>
                        <IconButton color="primary" aria-label="upload picture"  component="label"  >
                                <input
                                alt='user defined image' 
                                hidden accept="image/*" 
                                type='file' 
                                required
                                onChange = { saveFile }
                                name='image'
                                />
                                <PhotoCamera />
                        </IconButton>
                    </div>
                </div>
                <div>
                    <Button varient='contained' 
                        sx={{ 
                        width: '100%', 
                        bgcolor: 'button.secondary.main', 
                        color: 'primary.contrastText', 
                        marginTop: 1, 
                        marginBottom: 2
                        }}
                        onClick = {() => createAccount()}
                        > CREATE ACCOUNT
                    </Button>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default SignupForm;