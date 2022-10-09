import React from 'react'
//styles
import '../../styles/components/modal/_modal.scss';
//mui
import { createTheme, ThemeProvider, IconButton } from '@mui/material'
//icons
import PhotoCamera from '@mui/icons-material/PhotoCamera'

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

function FileUploadForm() {
<ThemeProvider theme={theme}></ThemeProvider>
  return (
    <>  
        <h4 className='upload-a-file'>UPLOAD AN IMAGE (required)</h4>
        <IconButton color="primary" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
        </IconButton>
    </>
  )
}

export default FileUploadForm