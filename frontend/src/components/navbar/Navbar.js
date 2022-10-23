//React
import React, { useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
//assets
import whitelogo from '../../assets/logos/iconleftwhite.svg';
import whiteIconSvg from '../../assets/logos/icon-monochrome-white.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//mui
import AppBar from '@mui/material/AppBar';
//import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
//components
import Avatar from '../avatar/Avatar'
//Styles
import '../../styles/components/logo/_logo.scss';
import '../../styles/components/navbar/_navbar.scss';
import '../../styles/components/posts/_posts.scss';
//Theme
import { createTheme, ThemeProvider, Button } from '@mui/material';

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
 
  const location = useLocation();
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
      <>
        <AppBar sx={{height: 70, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', bgcolor: 'appbar.primary.main'}}>
          <div className='navbar-parent'>
            {/* first terniary operator check if pathname !== homepage */}
            { location.pathname !== '/homepage' ? 
            <Link className ='link-global' to={'/homepage'}>
                <ArrowBackIcon/>
            </Link> 
            //if pathname === '/homepage', check the viewport, if desktop === true, do this 
            :  isDesktop ? 
              <img src={ whitelogo } alt ='groupomania logo in white' className='navbar-logo__home' /> 
              : //else do this
              <img src ={ whiteIconSvg }  alt ='groupomania logo in white' className='navbar-logo__home' /> 
            }             
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