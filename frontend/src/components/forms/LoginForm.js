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

function loginForm() {
    let userNameStorage;
    let userPasswordStorage; 

    /*
    ** | ERROR HANDLING function
    */

    //get access to DOM, always at assigned positions.
    let nameErrorMsg = document.getElementById('userNameErrorMsg');
    let passwordErrorMsg = document.getElementById('passwordErrorMsg');
    
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

    let token = localStorage.getItem('jwt');
   
    const login = () => {
        Axios.post('http://localhost:3000/auth/login', {
            userName: userNameStorage,
            userPassword: userPasswordStorage
        },
        { headers: {
                'Authorization': `Bearer ${token}`
        }
        }).then(function(response) {
            //send the JWT to local storage
            const token = response.data.token;
            sessionStorage.setItem('jwt', token);
            const tokenDecode = jwt(token); //decode
            sessionStorage.setItem('userId', JSON.stringify(tokenDecode.userId));
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

                            if (userNameStorage.length <= 1 || regexCharectorsResult === false ) {
                                nameErrorMsg.innerText = 'username must be greater than 5 letter and contain no special charectors';
                            }
                        }}
                    />
                    <p id='nameErrorMsg'></p>
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
                            //regex function
                            if (userPasswordStorage.length < 5 || regexCharectorsResult === false ) {
                                passwordErrorMsg.innerText = 'password must greater than 5 charectors';
                            }
                        }}
                    />
                    <p id='passwordErrorMsg'></p>
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
