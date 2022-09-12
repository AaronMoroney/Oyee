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

    const login = () => {
        Axios.post('http://localhost:3000/login', {
            userName: userNameStorage,
            userPassword: userPasswordStorage
        }).then((response) => {
                console.log('logged in!', response);
            }).catch((error) => {
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
                        onChange = {(e) => {
                            userPasswordStorage = e.target.value;
                            console.log(userNameStorage);
                        }}
                    />
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
                            onClick = { login }
                            > LOG IN 
                        </Button >
                    </Link>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default loginForm
