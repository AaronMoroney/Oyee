import React, {useRef} from 'react'

//assets
import typewriter from '../../assets/images/typewriter.jpg'
//styles
import '../../styles/components/modal/_modal.scss'
//mui
import TextField from '@mui/material/TextField'
//mui icons
import CloseIcon from '@mui/icons-material/Close';
//theme
import { createTheme, ThemeProvider } from '@mui/material'
//components
import CreatePostButton from '../buttons/CreatePostButton'

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
    

export const Modal = ({showModal, setShowModal }) => {
    const modalRef = useRef();
    const closeModal = e => {
        if (modalRef.current === e.target) {
          setShowModal(false);
        }
    };
    return (
        <>
        {showModal ? 
            <ThemeProvider theme={theme}>
                <>

                    <div className='modal-wrapper'>
                        <div className='modal-parent'>
                            
                            <div className='modal-parent__left'>
                                <img className = 'modal-left__img' src={typewriter} alt='oldschool typewriter' />
                            </div>
    
                            <div className='modal-parent__right'>
                                <div className='modal-form__parent'>
                                    <div className='modal-form__create-close'>
                                        <h2 className='modal-form__heading'>Create a Post 😇 </h2>
                                        <CloseIcon onClick={() => setShowModal(prev=> !prev)} sx={{marginTop: 1,}} />
                                    </div>
                                    <TextField 
                                    id="outlined-basic" 
                                    label="Add A Title" 
                                    variant="outlined" 
                                    className='login-form' 
                                    sx = {{
                                        marginBottom: 2,
                                        marginTop: 2,
                                    }} 
                                    />
                                    <TextField
                                    id="outlined-multiline-static"
                                    label="Post Body"
                                    multiline 
                                    rows={10}
                                    className = 'login-form'
                                    sx = {{
                                        marginTop: 1,
                                    }} 
                                    />
                                </div>

                                <CreatePostButton />

                            </div>
                        </div>
                    </div> 

                </>
            </ThemeProvider>
        : null }
        </>
    )
}

export default Modal