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
import { jwtDecode } from 'jwt-decode';


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

    //const regexCharectors = /!@#$%^&*(),.?":{}|<>/;
    
    //empty state
    const [ userError, setUserError] = useState(null);
    const [ passwordError, setPasswordError] = useState(null);
    const [ userName, setUserName] = useState(null);
    const [ userPassword, setUserPassword] = useState(null);
     
    //navigate
    const Navigate =  useNavigate();

    const userNameFunction = (userName) => {
        if (userName.length < 5) {
            setUserError('user name must be atleast 5 letters');
            return;
        }
        //regex
        /*
        if(regexCharectors.test(userName.value)){
            setUserError('user name should contain no special charectors');
            return;
        }
        */
        //setUserError('');
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
            setPasswordError('password must sould contain no special charectors');
            return;
        }
        setPasswordError('');
        */
        setUserPassword(password);
    }
                  
    /*
    ** | POST REQS function
    */

    let token = localStorage.getItem('jwtDecode');
   
    const login = () => {
        Axios.post('http://localhost:3000/auth/login', {
            userName: userName,
            userPassword: userPassword
        },        
        { headers: {
                'Authorization': `Bearer ${token}`,
            }
        }).then(function(response) {   
            const token = response.data.token;
            sessionStorage.setItem('jwtDecode', token);
            sessionStorage.setItem('userId', JSON.stringify(jwtDecode(token).userId));
            sessionStorage.setItem('userName', response.data.userName);
            //home
            Navigate('/homepage');
        }).catch(function(error)  {
            console.error(error);
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
                        required
                        sx = {{
                            marginBottom: 2,
                        }} 
                        onChange = {(e) => {
                            userNameFunction(e.target.value);
                        }}
                    />
                    <p className='error'>{userError}</p>
                   
                    <TextField 
                        id='outlined-password-input'
                        label='Password' 
                        className='login-form-password'
                        type='password' 
                        required
                        sx = {{
                            marginBottom: 2,
                        }} 
                        onChange = {(e) => {
                            userPasswordFunction(e.target.value);
                        }}
                    />
                     <p className='error'>{passwordError}</p>
                   
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
