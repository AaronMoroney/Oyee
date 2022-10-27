//React
import React, {useState} from 'react'
//mui components
import Fab from '@mui/material/Fab'
//components
import Modal from '../ui-template/Modal'
//mui icons 
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
//styles
import '../../styles/components/buttons/_addBackToTop.scss'
//theme
import { createTheme, ThemeProvider } from '@mui/material'

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

function AddPost() {
    /*
    ** | MODAL FUNCTION |
    */

    const [ showModal, setShowModal ] = useState(false);
    const openModal = () => {
        //toggle
        setShowModal(prev => !prev)
    }
    
    return (
     <ThemeProvider theme={theme}>
        <>
            <Fab aria-label='add' 
                sx={{
                bgcolor: 'white',
                color: 'button.secondary.main', 
                textTransform: 'none',
                marginTop: 1
                }}
                > 
                {/* children of FAB */}
                <AddOutlinedIcon  onClick={openModal}/>
                <Modal showModal={showModal} setShowModal={setShowModal} />   
                {/* end */}     
            </Fab> 
        </>
     </ThemeProvider>
    )
}

export default AddPost