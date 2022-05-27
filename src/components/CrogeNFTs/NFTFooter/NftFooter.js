import React from 'react';
import './NftFooter.css';
import {BsFacebook,BsInstagram,BsTwitter,BsLinkedin} from "react-icons/bs";
import {FaTelegramPlane} from "react-icons/fa";
const NftFooter = ({color}) => {
  return (
    <div className='nft-footer' style={{background:`${color}`}}>
      <div className='footer-wrapper_div'>
      <div>
      <p>Croge Website</p>
        </div>   
        <div className='footer__links'>
          <a href='#'><BsFacebook size={24} /></a>
          <a href='#'><BsInstagram size={24} /></a>
          <a href='#'> <BsTwitter size={24} /></a>
          <a href='#'> <BsLinkedin size={24} /></a>
          <a href='#'> <FaTelegramPlane size={24}/></a>
          </div>     
      </div>
    </div>
  )
}

export default NftFooter;