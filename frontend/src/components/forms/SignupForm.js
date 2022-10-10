
//mui components
import TextField from '@mui/material/TextField'
//react
//import { State } from 'react';
import { Link } from 'react-router-dom'
//axios
import Axios from 'axios'
//Theme
import { createTheme, ThemeProvider, Button } from '@mui/material'
//styles
import '../../styles/components/forms/_login-form.scss'
import '../../styles/components/link/_link-global.scss'
//jwt
import jwt from 'jwt-decode'

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
    let userNameStorage;
    let userPasswordStorage;
    let companyPositionStorage;
    let emailStorage;
    let genderStorage;
    
    /*
    ** | ERROR HANDLING function
    */

    //get access to DOM, always at assigned positions.
    let nameErrorMsg = document.getElementById('nameErrorMsg');
    let passwordErrorMsg = document.getElementById('passwordErrorMsg');
    //let positionErrorMsg = document.getElementById('positionErrorMsg');
    let emailErrorMsg = document.getElementById('emailErrorMsg');
    //let genderErrorMsg = document.getElementById('genderErrorMsg');

    //email
    //let regexEmail = /\S+@\S+\.\S+/g;
    //charectors
    let regexCharectors = /^[a-zA-Z ]/;

    //function
    function regexCharectorsResult() {
        regexCharectors.test(userNameStorage.value, userPasswordStorage.value);
    }; 

    /*
    ** | POST REQS function(s)
    */

    let token = localStorage.getItem('jwt');

    const createAccount = () => {
        Axios.post('http://localhost:3000/auth/signup', {
            userName: userNameStorage,
            userPassword: userPasswordStorage,
            userEmail: emailStorage,
            userCompanyPosition: companyPositionStorage,
            userGender: genderStorage
        }).then(function(response) {
            login(response);
        }).catch(function(error) {
           console.log(error);
        })
    };

    const login = () => {
        Axios.post('http://localhost:3000/auth/login', {
            userName: userNameStorage,
            userPassword: userPasswordStorage,
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
                            userNameStorage = e.target.value;
                
                            if (userNameStorage.length <= 1 || regexCharectorsResult === false ) {
                                nameErrorMsg.innerText = 'userName must be greater than 5 letters and contain no special charectors';
                            }
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
                            userPasswordStorage = e.target.value;
                   
                            if (userPasswordStorage.length <= 1 || regexCharectorsResult === false ) {
                                passwordErrorMsg.innerText = 'first name must be greater than 5 letters and contain no special charectors(except spaces where required)';
                            } 
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
                            emailStorage = e.target.value;
                            if (emailStorage.length <= 1 || regexCharectorsResult === false ) {
                                emailErrorMsg.innerText = 'email must be in the format of something@something.com';
                            } 
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
                                companyPositionStorage = e.target.value;  
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
                                genderStorage= e.target.value;
                            }}
                        />
                    

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
                            onClick = {() => { createAccount(); regexCharectorsResult();}}
                            > CREATE ACCOUNT
                        </Button>
                    </Link>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default SignupForm