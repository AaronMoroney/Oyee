//react
import { Link } from 'react-router-dom'
//mui components
import TextField from '@mui/material/TextField'
//Theme
import { createTheme, ThemeProvider, Button } from '@mui/material'
//styles
import '../../styles/components/forms/_login-form.scss'
//axios
import Axios from 'axios'
//import LoginMsg from '../../components/errormsg/loginMsg'

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

/*
** | REGEX functionality
** | get access to username, password fields
** | Check username & password fields against .value
** | give error message
*/

function loginForm() {
    let userNameStorage;
    let userPasswordStorage; 

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
    ** | POST REQS function
    */
   
    const login = () => {
        Axios.post('http://localhost:3000/login', {
            userName: userNameStorage,
            userPassword: userPasswordStorage
        }).then(function(response) {
            console.log(response);
        }).catch(function(error)  {
            console.log(error);
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
                        onChange = {(e) => {
                            userPasswordStorage = e.target.value;
                            console.log(userNameStorage);
                            //regex function
                            if (userNameStorage.value.length <= 1 || regexCharectorsResult === false ) {
                                nameErrorMsg.innerText = 'first name must be greater than 1 letter and contain no special charectors(except spaces where required)';
                            }
                        }}
                    />
                    <p id='userPasswordErrorMsg'></p>
                </div>
                <div >
                    {/* For UI dev purposes, created link to home page */}
                    <Link className='link-global' to='/homepage'>
                        <Button varient='contained' 
                            sx={{ 
                            width: '100%', 
                            bgcolor: 'button.secondary.main', 
                            color: 'primary.contrastText', 
                            marginTop: 1, 
                            marginBottom: 2
                            }}
                            onClick = {() => { login(); regexCharectorsResult(); }}
                            > LOG IN 
                        </Button >
                    </Link>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default loginForm
