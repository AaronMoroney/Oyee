import React from 'react';
//axios
import Axios from 'axios';
//react router
import { Link } from 'react-router-dom'
//theme
import { createTheme, ThemeProvider, Button } from '@mui/material';
//styles
import '../../styles/components/modals/_deleteModal.scss';

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

export const DeleteModal = ({showDeleteModal, setShowDeleteModal }) => {
    //for axios req
    let userIdStorage = sessionStorage.getItem('userId');
    let token = sessionStorage.getItem('jwt')
    const deleteUser = () => {
        Axios.delete(`http://localhost:3000/auth/${userIdStorage}`, 
        {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }).then(function(response) {
            console.log(response);
        }).catch(function(error)  {
            console.error(error);
        })
    };

    return (
        <>
        {showDeleteModal ? 
            <ThemeProvider theme={theme}>
                <>
                    <div className='delete-modal-parent'>
                        <Link to='/'>
                            <Button sx={{
                                backgroundColor: 'button.confirm.main', 
                                color: 'button.confirm.contrastText', 
                                display: 'flex', flexDirection: 'column', 
                                width: '175px' }}
                                onClick={deleteUser}
                                >
                                <p>Confirm Delete</p>
                            </Button>
                        </Link>
                    </div>
                </>
            </ThemeProvider>
        : null }
        </>
    )
}
export default DeleteModal
