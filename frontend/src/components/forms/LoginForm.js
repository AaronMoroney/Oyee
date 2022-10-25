//react
import React, { useState } from 'react';
//router dom
import { useNavigate } from 'react-router-dom'
//mui components
import TextField from '@mui/material/TextField'
//Theme
import { createTheme, ThemeProvider, Button } from '@mui/material'
//styles
import '../../styles/components/forms/_login-form.scss'
//axios
import Axios from 'axios'
//token
import jwt from 'jwt-decode'


//refactor second axios call into own function
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

function LoginForm() {
    
    /*
    ** | ERROR HANDLING function
    */

    //createElements for err
    let nameErrorMsg = document.createElement('p');
    nameErrorMsg.classList.add('error');
    let passwordErrorMsg = document.createElement('p');
    passwordErrorMsg.classList.add('error');
    
    //email
    //let regexEmail = /\S+@\S+\.\S+/g;
    //charectors
    //let regexCharectors = /^[a-zA-Z ]/;

    //function
    //function regexCharectorsResult() {
    //    regexCharectors.test(userNameStorage.value, userPasswordStorage.value);
    //}; 

    //empty state
    const [ error, setError ] = useState(null);
    const [ userName, setUserName] = useState(null);
    const [ userPassword, setUserPassword] = useState(null);
     
    //navigate
    const Navigate =  useNavigate();
                  
    /*
    ** | POST REQS function
    */

    let token = localStorage.getItem('jwt');
   
    const login = () => {
        Axios.post('http://localhost:3000/auth/login', {
            userName: userName,
            userPassword: userPassword
        },        
        { headers: {
                'Authorization': `Bearer ${token}`,
            }
        }).then(function(response) {   
            //on response go to home
            const token = response.data.token;
            sessionStorage.setItem('jwt', token);
            const tokenDecode = jwt(token); //decode
            sessionStorage.setItem('userId', JSON.stringify(tokenDecode.userId));
            const userName = response.data.userName;
            sessionStorage.setItem('userName', userName);

            //navigate to homepage on successful response
            Navigate('/homepage');
           
 
        }).catch(function(error)  {
            console.log(error);
            setError(error);
        })
    };

    return (
        <ThemeProvider theme={theme}>
            <div>
                <h2>Login</h2>
                <div className='login-form-parent'>
                    <TextField 
                        id="outlined-basic" 
                        label="Username" 
                        variant="outlined" 
                        className='login-form' 
                        sx = {{
                            marginBottom: 2,
                        }} 
                        onChange = {(e) => {
                            setUserName(e.target.value);
                         
                            //access for regex
                            /*
                            if (userNameStorage.length <= 4 || regexCharectorsResult === false ) {
                                let loginFormAccess = document.getElementsByClassName('login-form')[0];
                                loginFormAccess.appendChild(nameErrorMsg);
                                nameErrorMsg.innerText = 'username must be greater than 5 letters and contain no special charectors';
                            }
                            */
                        }}
                    />
                    
                   
                    <TextField 
                        id='outlined-password-input'
                        label='Password' 
                        className='login-form-password'
                        type='password' 
                        sx = {{
                            marginBottom: 2,
                        }} 
                        onChange = {(e) => {
                            setUserPassword(e.target.value);
                         
                            /*
                            //regex function
                            if (userPasswordStorage.length <= 4 || regexCharectorsResult === false ) {
                                let loginFormAccessPassword = document.getElementsByClassName('login-form-password')[0];
                                loginFormAccessPassword.appendChild(passwordErrorMsg);
                                passwordErrorMsg.innerText = 'password must be atleast 5 letters';
                            }
                            */
                        }}
                    />
                    {error ? <p className='error'>please check <strong> both </strong>credentials and try again </p> : null }
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
                        onClick = {() => login() }
                        > LOG IN 
                    </Button >
                     
                </div>
            </div>
        </ThemeProvider>
    )
}

export default LoginForm
