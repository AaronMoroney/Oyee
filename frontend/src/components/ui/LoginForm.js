//mui components
import TextField from '@mui/material/TextField'
//Theme
import { createTheme, ThemeProvider, Button } from '@mui/material'
//styles
import '../../styles/_login-form.scss'
//import { bgcolor } from '@mui/system';



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
                    />
                    <TextField 
                        id='outlined-password-input'
                        label='Password' 
                        className='login-form'
                        type='password' 
                        sx = {{
                            marginBottom: 2,
                        }} 
                    />
                </div>
                <div >
                    <Button varient='contained' 
                        sx={{ 
                        width: 500, 
                        bgcolor: 'button.secondary.main', 
                        color: 'primary.contrastText', 
                        marginTop: 1, 
                        marginBottom: 2
                        }}> LOG IN 
                    </Button>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default loginForm
