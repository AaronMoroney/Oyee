//react
import React, {useState} from 'react'
//styles
import '../../styles/components/buttons/_confirm-delete-button.scss'
//mui
import { createTheme, ThemeProvider, Button } from '@mui/material'
//components
import DeleteModal from '../../components/ui-template/DeleteModal'

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
    /*
    ** | set showDeleteModal
    */

    const [ showDeleteModal, setShowDeleteModal ] = useState(false);
    const openDeleteModal = () => {
        //toggle
        setShowDeleteModal(prev => !prev)
    }
    return (
    <>
        <ThemeProvider theme={theme}>
            <Button 
                varient='text' 
                sx={{ bgcolor: 'button.delete.main', color: 'button.delete.contrastText', width: '175px' }}
                onClick={openDeleteModal}
                > 
                Delete account
                <DeleteModal showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} />  
            </Button>
        </ThemeProvider>
    </>
  )
}

export default DeleteButton