//React
import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
//assets
import whitelogo from '../../assets/logos/iconleftwhite.svg'
//import whiteIcon from '../../assets/logos/white-groupomania-icon.png'
import whiteIconSvg from '../../assets/logos/icon-monochrome-white.svg'
//mui
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
//icon
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
//Styles
import '../../styles/components/logo/_logo.scss'
import '../../styles/components/navbar/_navbar.scss'
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
        main: '#D44651',
        contrastText: '#FFFFFF'
      }
    }
  },
});

function Navbar() {

  const [ isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  }
  
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  

  return (
    <ThemeProvider theme={theme}>
      < >
        <AppBar sx={{height: 70, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', bgcolor: 'appbar.primary.main'}}>
          <div className='navbar-parent'>
            {/* render depending on viewport w */}
            { isDesktop ? (
              <img src={whitelogo} alt ='groupomania logo in white' className='navbar-logo__home' />
            ):(
              <img src ={whiteIconSvg}  alt ='groupomania logo in white' className='navbar-logo__home' />
            )}
            <div>
              <Badge sx ={{ bgcolor: 'transparent'}}/>
              <Link className='link-global' to='/profilepage'>
                <Button varient='contained'>
                    <Avatar />
                </Button>
              </Link>
            </div>
          </div>
        </AppBar>
      </>
    </ThemeProvider>
  )
}

export default Navbar