//react
import React from 'react'
//react
import { Link } from 'react-router-dom'
//styles
import '../../styles/components/buttons/_confirm-delete-button.scss'
//mui
import { createTheme, ThemeProvider, Button } from '@mui/material'
//styles
import '../../styles/components/posts/_posts.scss';


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
        confirm: {
            main: '#2FD381',
            contrastText: '#FFFFFF',
        },
        delete: {
            main: '#D32F2F',
            contrastText: '#FFFFFF',
        },
        },
        appbar: {
        primary: {
            main: '#091D39',
            contrastText: '#FFFFFF',
        },
        }
    }
});


function logoutButton() {
    /*
    ** | logout functionality
    */
    const logout = () => {
        sessionStorage.removeItem('jwt');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('userName');
    };
  return (
    <>
        <ThemeProvider theme={theme}>
            <Link className='link-global' to ='/'>
                <Button 
                    varient='text' 
                    sx={{ borderColor: 'button.delete.main', border: '2px solid', color: 'button.delete.main',  width: '175px', height: '45px' }}
                    onClick ={() => logout()}
                    > 
                    Logout
                </Button>
            </Link> 
        </ThemeProvider>
    </>
  )
}

export default logoutButton