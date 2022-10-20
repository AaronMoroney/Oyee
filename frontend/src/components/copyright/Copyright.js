//react
import React from 'react'
//styles
import '../../styles/components/copyright/_copyright.scss'


function Copyright() {
  let userName = sessionStorage.getItem('userName');
  return (
    <div>
        <p className='copyright'>Logged in: {userName} </p>
        <p className='copyright'> 
        internal use only.  
        Grupomania Inc. © 2022. 
        <br />
        All rights reserved
        </p>
    </div>
  )
}

export default Copyright