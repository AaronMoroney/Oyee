//mui components
import TextField from '@mui/material/TextField'
//react
import { Link } from 'react-router-dom'
//import { useState } from 'react';
//axios
import Axios from 'axios'
//Theme
import { createTheme, ThemeProvider, Button } from '@mui/material'
//styles
import '../../styles/components/forms/_login-form.scss'
import '../../styles/components/link/_link-global.scss'

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


/*

** | LOGIN LOGIC |
** | capture data with onChange - username and password data
** | run function createAccount on button click

** | create userName & paddword empty object
** | then push the target value into the obj
** | send with axios

// ERRORS: (FRONT) THE INPUT IS RECEIVING MULTIPLE CHARECOTORS FROM FRONTEND
// ERRORS: (BCRYPT) data must be a string or Buffer and salt must either be a salt string or a number of rounds'
// ERRORS: (BACKEND) UNDEFINED STRING, LINE 09, USER.JS

*/


function SignupForm() {
    let userNameStorage
    let userPasswordStorage 

    const createAccount = () => {
        Axios.post('http://localhost:3000/signup', {
            userName: userNameStorage,
            userPassword: userPasswordStorage
        }).then((response) => {
            console.log(response);
        });
    };
    
    return (
        <ThemeProvider theme={theme}>
            <div>
                <h2>Create Account</h2>
                <div className='login-form-parent'>
                    <TextField 
                        id='outlined-basic' 
                        label='Username' 
                        variant='outlined' 
                        className='login-form'
                        type='text' 
                        sx = {{
                            marginBottom: 2,
                        }} 
                        //capture
                        onChange = {(e) => {
                            userNameStorage = e.target.value;
                            console.log(userNameStorage);
                        }}
                    />
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
                            userPasswordStorage = e.target.value;
                            console.log(userNameStorage);
                        }}
                    />
                    {/*
                    <TextField 
                        id="outlined-basic" 
                        label="Company Position" 
                        variant="outlined" 
                        className='login-form' 
                        sx = {{
                            marginBottom: 2,
                        }} 
                    />
                    <TextField 
                        id="outlined-basic" 
                        label="Email" 
                        variant="outlined" 
                        className='login-form' 
                        sx = {{
                            marginBottom: 2,
                        }} 
                    />
                    */}
                </div>
                <div >
                    <Link className='link-global' to='/homepage'>
                        <Button varient='contained' 
                            sx={{ 
                            width: '100%', 
                            bgcolor: 'button.secondary.main', 
                            color: 'primary.contrastText', 
                            marginTop: 1, 
                            marginBottom: 2
                            }}
                            onClick = { createAccount }
                            > CREATE ACCOUNT
                        </Button>
                    </Link>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default SignupForm