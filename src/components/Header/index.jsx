import React from 'react'
import { ChevronLeft } from '../../images'
import { Wrapper } from './element'
import { useNavigate  } from 'react-router-dom';

const Header = ({title="use Props title"}) => {
  const navigate  = useNavigate()
  return (
    <Wrapper>
      <div onClick={()=> navigate(-1)}>
        <img src={ChevronLeft} alt="Back" />
      </div>
      <div className='h4-bold'>{title}</div>
    </Wrapper>
  )
}

export default Header