import React from 'react'
import {AiOutlineGoogle ,AiFillFacebook ,AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
    

    
      <p>2022 P.B Headphones All rights reserved.</p>
      <p className='icons'>
        <AiFillInstagram/>
        <AiOutlineTwitter/>
        <AiFillFacebook/>
        <AiOutlineGoogle/>
      </p> 
      <p className='created-by'>Created By Pitambar Bhadra</p>
    </div>
  )
}

export default Footer