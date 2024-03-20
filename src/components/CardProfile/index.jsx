import React from 'react'
import { Wrapper } from './element'
import GradeIcon from '@mui/icons-material/Grade';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { VerifiedIcon } from '../../images';
const ProfileCard = () => {
  return (
    <Wrapper>
      <div>
        <img alt="profile" src={"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
      </div>
      <div>
        <p className='p-semibold'>Ben</p>
        <p className='caption-reg'>Member since Nov 2023   </p>
        <p className='caption-reg'><LocationOnOutlinedIcon fontSize='small'/>Happy Town, Capital City </p>
        <p className='caption-semibold'><GradeIcon sx={{color:"#FACA15"}} fontSize='small'/>5.0 • Very Responsive </p>
        <p className='label-bold'>View Profile</p>
      </div>

      <div className='verified-banner'>
        <img src={VerifiedIcon} alt="verified-icon"/>
        <p className='caption-bold'>VERIFIED ACCOUNT</p>
      </div>
    </Wrapper>
  )
}

export default ProfileCard