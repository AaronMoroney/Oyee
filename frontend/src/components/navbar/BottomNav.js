import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import AddPost from '../buttons/AddPost';
//theme
import { createTheme, ThemeProvider } from '@mui/material'
import { ClassNames } from '@emotion/react';

//Mui components theme provider
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

const styles = {
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
};
  


function LabelBottomNavigation() {
  return (
    <ThemeProvider theme={theme}>
        <>
            <BottomNavigation sx={{ width: '100%',  height: '70px', backgroundColor: 'button.secondary.main', position: 'fixed', bottom: 0}}  >
            <AddPost />
            </BottomNavigation>
        </>
    </ThemeProvider>
  );
}

export default LabelBottomNavigation