//React
import React, { useState } from 'react'
//Styles
import '../../styles/_loginCard.scss'
import '../../styles/_login-bcg.scss'
import '../../styles/components/buttons/_button.scss'
import '../../styles/components/link/_link-global.scss'
//Assets
import skyline from '../../assets/images/skyline.jpg'
import whitelogo from '../../assets/logos/iconleftwhite.svg'
//components
import LoginForm from '../forms/LoginForm'
import SignupForm from '../forms/SignupForm'
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
    appbar: {
      primary: {
        main: '#091D39',
        contrastText: '#FFFFFF'
      }
    }
  },
});

function LoginSignupTemp() {
  const [ isToggled, setIsToggled ] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <div>
          <nav className='login-navbar'>
              <img src={whitelogo} alt ='groupomania logo in white' className='navbar-logo__login'></img>
          </nav>
          <div className='login-card__parent'>
            <div className='login-card'>
              <Button varient='text' onClick={() => setIsToggled(!isToggled) } className='signup-link' >
              { isToggled ? 'back to login': 'not signed up?'}
              </Button>
              { isToggled ? <SignupForm /> : <LoginForm /> }
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

