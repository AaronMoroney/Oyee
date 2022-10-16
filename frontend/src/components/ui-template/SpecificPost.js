import React from 'react';
//axios
//import Axios from 'axios';
//mui
//import TextField from '@mui/material/TextField';
//import Paper from '@mui/material/Paper';
//mui icons
////import CloseIcon from '@mui/icons-material/Close';
//theme
import { createTheme, ThemeProvider, Avatar} from '@mui/material';
//styles
import '../../styles/components/modals/_postModal.scss';
import '../../styles/components/posts/_posts.scss';
//mui icons
import CloseIcon from '@mui/icons-material/Close';


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
        },
        appbar: {
        primary: {
            main: '#091D39',
            contrastText: '#FFFFFF'
        }
        }
    },
});

function specificPost() {
    return (
        <>
        
            <ThemeProvider theme={theme}>
                <div></div>
            </ThemeProvider>  

        </>
    )
}

export default PostModal