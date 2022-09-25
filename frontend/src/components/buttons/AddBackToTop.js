//React
import React, {useState} from 'react'
//mui components
import Fab from '@mui/material/Fab'
//components
import Modal from '../../components/modal/Modal'
//mui icons 
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import VerticalAlignTopOutlinedIcon from '@mui/icons-material/VerticalAlignTopOutlined';
//styles
import '../../styles/components/buttons/_addBackToTop.scss'
//theme
import { createTheme, ThemeProvider } from '@mui/material'


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

function AddBackToTop() {
    /*
    ** | MODAL FUNCTION |
    */

    const [ showModal, setShowModal ] = useState(false)
    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return (
     <ThemeProvider theme={theme}>
        <>
            <Fab aria-label='add' sx={{bgcolor: 'button.secondary.main', color: 'button.primary.contrastText'}}>
                <AddOutlinedIcon onClick={openModal} />
                <Modal showModal={showModal} setShowModal={setShowModal} />
            </Fab> 
            { showModal ? null :  
            <Fab 
                variant='extended'
                sx={{ 
                    height: '55.590px', 
                    bgcolor: 'button.secondary.main', 
                    color: 'button.primary.contrastText'
                }}
                >  
                <VerticalAlignTopOutlinedIcon sx={{ mr: 1 }}   />
                back to top
            </Fab>
            }
        </>
     </ThemeProvider>
    )
   
}

export default AddBackToTop