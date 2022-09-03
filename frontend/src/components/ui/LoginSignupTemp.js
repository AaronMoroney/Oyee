//React
import React, { useState } from 'react'
//Styles
import '../../styles/_loginCard.scss'
import '../../styles/_backdrop.scss'
import '../../styles/_button.scss'
//Assets
import skyline from '../../assets/images/skyline.jpg'
import whitelogo from '../../assets/logos/iconleftwhite.svg'
//components
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
//Theme
import { createTheme, ThemeProvider, Button } from '@mui/material'

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

//components created
//require conditons 
//use state hooks 

function LoginSignupTemp() {
  const [ isToggled, setIsToggled ] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <div>
          <nav className='login-navbar'>
              <img src={whitelogo} alt ='groupomania logo in white' className='login-navbar-logo'></img>
          </nav>
          <div className='login-card__parent'>
            <div className='login-card'>
              <Button varient='text' onClick={() => setIsToggled(!isToggled) } className='signup-link' >
              { isToggled ? 'back to login': 'not signed up?'}
              </Button>
              { isToggled ?  <SignupForm />  :  <LoginForm />   }
            </div>
          </div>
          <div>
              <img src={skyline} alt ='corporate building city skyline' className ='login-backdrop__image' /> 
              <div className='login-backdrop__overlay'></div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default LoginSignupTemp

