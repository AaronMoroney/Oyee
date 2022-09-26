//react
import React from 'react'
//styles
import '../../styles/components/buttons/_confirm-delete-button.scss'
//mui
import {  createTheme, ThemeProvider, Button } from '@mui/material'



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

function createPostButton() {
  return (
    <>
        <ThemeProvider theme={theme}>
            <Button varient='text' sx={{ bgcolor: 'button.confirm.main', color: 'button.confirm.contrastText', width: '175px', height: '45px' }}>Share Post </Button>
        </ThemeProvider>
    </>
  )
}

export default createPostButton