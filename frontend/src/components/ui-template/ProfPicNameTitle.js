//react
import React from 'react'
//mui
import Avatar from '@mui/material/avatar';
//styles
import '../../styles/components/profpicnametitle/_profpicnametitle.scss'


function ProfPicNameTitle() {
  return (
    <>    
        <div className='employee-parent'>
            <Avatar sx={{ width: '200px', height: '200px', borderRadius: '5px'}}/>
            <div className='employee-info-parent'>
                <h6 className = 'employee-info__gender'> She / Her</h6>
                <h2 className = 'employee-info__name'> Isabelle Thiarova</h2>
                <h4 className = 'employee-info__company-title'> Senior Data Analyst</h4>
            </div>
        </div>
    </>
  );
}

export default ProfPicNameTitle