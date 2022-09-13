
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
** | function for error handling 
** | if error status != success
** | tern. op. to display a, if not 'null'
** | append to the relevant place using (?)
** | write the function
** | call in catch block, invoking the function with error status
*/

function SignupForm() {

    let userNameStorage;
    let userPasswordStorage
    
     /*
    ** | ERROR HANDLING function
    */

    //get access to DOM, always at assigned positions.
    let nameErrorMsg = document.getElementById('userNameErrorMsg');
    let passwordErrorMsg = document.getElementById('userNameErrorMsg');

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
    
    //login invoked with resp. data from signup
    const login = () => {
        Axios.post('http://localhost:3000/login', {
            userName: userNameStorage,
            userPassword: userPasswordStorage
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
           console.log(error);
        })
    }
    
    //working
    const createAccount = () => {
        Axios.post('http://localhost:3000/signup', {
            userName: userNameStorage,
            userPassword: userPasswordStorage,
        }).then(function(response) {
            login(response);
        }).catch(function(error) {
           console.log(error);
        })
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

                            if (userPasswordStorage.value.length <= 1 || regexCharectorsResult === false ) {
                                passwordErrorMsg.innerText = 'first name must be greater than 1 letter and contain no special charectors(except spaces where required)';
                            }
                        }}
                    />
                    <p id='userNameErrorMsg'></p>
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

                            if (userNameStorage.value.length <= 1 || regexCharectorsResult === false ) {
                                nameErrorMsg.innerText = 'first name must be greater than 1 letter and contain no special charectors(except spaces where required)';
                            }
                        }}
                    />
                    <p id='userPasswordErrorMsg'></p>
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
                            onClick = {() => { createAccount(); regexCharectorsResult(); }}
                            > CREATE ACCOUNT
                        </Button>
                    </Link>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default SignupForm