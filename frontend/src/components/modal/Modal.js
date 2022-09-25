import React from 'react'
//assets
import typewriter from '../../assets/images/typewriter.jpg'
//styles
import '../../styles/components/modal/_modal.scss'

export const Modal = ({showModal, setShowModal}) => {
    return (
        <>
        {showModal ?
        <div className='modal-wrapper'>
            <div className='modal-parent'>
                <div className='Modal-parent__left'>
                    <img className = 'modal-left__img' src={typewriter} alt='oldschool typewriter' />
                </div>
                <div className='modal-parent__right'>
                    <div className='modal-form__parent'>
                        form info
                    </div>
                </div>
            </div>
        </div> 
        : null}
        </>
      )

}

export default Modal