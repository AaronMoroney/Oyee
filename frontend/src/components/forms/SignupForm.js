import React, { useState, useRef, memo } from 'react';
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

    let nameErrorMsg = document.createElement('p');
    let passwordErrorMsg = document.createElement('p');
    let emailErrorMsg = document.createElement('p');
    
    //classlist add
    nameErrorMsg.classList.add('error');
    passwordErrorMsg.classList.add('error');
    emailErrorMsg.classList.add('error');

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

    //email
    let regexEmail = /\S+@\S+\.\S+/g;
    let regexCharectors = /[a-zA-Z]/;

    //useREF
    const signupUsernameRef = useRef(null);
    const signupPasswordRef = useRef(null);

    /* if length or regex = false && message already shown
    **     do nothing
    ** there is no message and length or regex = false
    **     display a message 
    ** if length & regex are ok - and there is a message
    **     remove the message, set 
    ** all cases above are false  
    **     set
    */
                          
    const userNameFunction = (setUserNameStorage) => {
        //regex
        let regexCharectorsUsername = regexCharectors.test(setUserNameStorage.valueOf)
        console.log(regexCharectorsUsername);
        
        if ((setUserNameStorage.length <= 4 || regexCharectorsUsername === false) && signupUsernameRef.current.contains(nameErrorMsg)) {
            console.log('username, 1');
 

        } else if (setUserNameStorage.length <= 4 || regexCharectorsUsername === false )  {
            console.log('username, 2');
            signupUsernameRef.current.appendChild(nameErrorMsg);
            nameErrorMsg.innerText = 'username must be atleast 5 letters and contain no special charectors';
    

        } else if ((setUserNameStorage.length > 4 && regexCharectorsUsername === true) && signupUsernameRef.current.contains(nameErrorMsg)) {
            console.log('username, 3');
            signupUsernameRef.current.removeChild(nameErrorMsg);
            setUserName(setUserNameStorage);
  
        } else {
            console.log('username, 4');
            setUserName(setUserNameStorage);
         
        }
    }

    function userPasswordFunction(setUserPasswordStorage) {

        let regexCharectorsPassword = regexCharectors.test(setUserPasswordStorage.valueOf)
        console.log(regexCharectorsPassword);

        if ((setUserPasswordStorage.length <= 4 || regexCharectorsPassword === false) && signupPasswordRef.current.contains(passwordErrorMsg)) {
            console.log('password, 1');

        } else if  (setUserPasswordStorage.length <= 4 || regexCharectorsPassword === false) { 
            console.log('password, 2');
            signupPasswordRef.current.appendChild(passwordErrorMsg);
            passwordErrorMsg.innerText = 'password must be atleast 5 letters and contain no special charectors';

        } else if ((setUserPasswordStorage.length > 4 && regexCharectorsPassword === true) && signupPasswordRef.current.contains(passwordErrorMsg)) {
            console.log('password, 3');
            signupPasswordRef.current.removeChild(passwordErrorMsg);
            setUserPassword(setUserPasswordStorage);

        } else {
            console.log('password, 4');
            setUserPassword(setUserPasswordStorage);

        }
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
                    <TextField 
                        ref= {signupUsernameRef}
                        id='outlined-username-input' 
                        label='Username' 
                        variant='outlined' 
                        className='signup-username'
                        type='text' 
                        sx = {{
                            marginBottom: 2,
                        }} 
                        
                        //capture
                        onBlur = {(e) => {
                            var setUserNameStorage = e.target.value;
                            userNameFunction(setUserNameStorage);
                        }} 
                    />

                    <TextField 
                        ref={signupPasswordRef}
                        id='outlined-password-input'
                        label='Password' 
                        className='signup-password'
                        type='password' 
                        sx = {{
                            marginBottom: 2,
                        }}
                        //capture
                        onBlur = {(e) => {
                            var setUserPasswordStorage = e.target.value;
                            userPasswordFunction(setUserPasswordStorage);
                        }}
                    />
                    
                    
                    <TextField 
                        id="outlined-email-input" 
                        label="Email" 
                        variant="outlined" 
                        className='login-form-email' 
                        sx = {{
                            marginBottom: 2,
                        }} 
                        onBlur = {(e) => {
                            let userEmailStorage = e.target.value;
                            let emailFormAccess = document.getElementsByClassName('login-form-email')[0];
                            let regexEmailResult = regexEmail.test(userEmailStorage);
                          
                            if (regexEmailResult === false) {
                                //display error message
                                emailFormAccess.appendChild(emailErrorMsg);
                                emailErrorMsg.innerText = 'email must be in the format something@something.something';
                                return;
                            } else if (regexEmailResult === true && emailFormAccess.contains(emailErrorMsg)) {
                                //remove error message
                                let emailFormAccess = document.getElementsByClassName('login-form-email')[0];
                                emailFormAccess.removeChild(emailErrorMsg);
                                setUserEmail(userEmailStorage);
                                return;
                            } else {
                                //dont need error message
                                setUserEmail(userEmailStorage);
                                return;
                            }
                        }}
                    />
                    
                    <div>
                        <TextField 
                            id="outlined-company-input" 
                            label="Company Position" 
                            variant="outlined" 
                            className='login-form-company' 
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
                            className='login-form-gender' 
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
                            <h4 className='upload-a-file'>UPLOAD A PROFILE PHOTO - required* </h4>
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

export default memo(SignupForm);