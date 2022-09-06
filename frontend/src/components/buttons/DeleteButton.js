//react
import React from 'react'
//styles
import '../../styles/components/buttons/_confirm-delete-button.scss'

//mui
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

function DeleteButton() {
  return (
    <>
        <ThemeProvider theme={theme}>
            <Button varient='text' sx={{ bgcolor: 'button.delete.main', color: 'button.delete.contrastText', marginLeft: '10%', width: '175px' }} >Delete account </Button>
        </ThemeProvider>
    </>
    
  )
}

export default DeleteButton