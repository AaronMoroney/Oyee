//React
import React from 'react';
//mui
import Avatar from '@mui/material/Avatar';
//components
import Calendar from './nav-widgets/Calendar';
import Timezones from './nav-widgets/Timezones';
import Trending from './nav-widgets/Trending';
import Search from './nav-widgets/Search';
//styles
import '../../styles/_home-feed.scss'

//Theme
//import { createTheme, ThemeProvider, Button } from '@mui/material';

// const theme = createTheme ({
//   palette: {
//     button: {
//       primary: {
//         main: '#091D39',
//         contrastText: '#FFFFFF', 
//       },
//       secondary: {
//         main: '#D44651',
//       },
//     },
//     appbar: {
//       primary: {
//         main: '#D44651',
//         contrastText: '#FFFFFF'
//       }
//     }
//   },
// });

const Navbar = () => {
  return (
    // <ThemeProvider theme={theme}>
    <>
      <div className='top-background'>
        <img className='logo' alt='logo'>
          
        </img>
        <Avatar>

        </Avatar>
      </div>
      <div  className='top-background__widgets'>
        <Search />
        <Trending />
        <Calendar />
        <Timezones />
      </div>
    </>
    // </ThemeProvider>
  )
}

export default Navbar
