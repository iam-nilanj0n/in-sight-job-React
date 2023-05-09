import React from 'react'
import arrowPic from '../../../assets/arrowLogo.png';
import './arrowLogo.css';

export default function ArrowLogo() {
  return (
    <div className='arrowLogo'>
        <button><img src={arrowPic} alt='arrowPic' className='arrowPic'/></button>
    </div>
  )
}
