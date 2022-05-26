import React from 'react';
import "./Footer.css";
import {BsFacebook,BsTwitter,BsLinkedin} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiOutlineInstagram } from 'react-icons/ai';
import FooterIcon from "../../assests/tokenselect.png";
const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-header'><p>Croge Website</p></div>
        <div className='footer-icons' >
        <a href='#'>< BsFacebook  size={20} /></a>    
            <a href='#'><AiOutlineInstagram size={20} /> </a>
            <a href='#'> <BsTwitter size={20} /></a>
             <a href='#'><BsLinkedin size={20} /></a>
             <a href='#'><FaTelegramPlane size={20} /></a>
        </div>
        <div className='footer-details'>
            <div>
                <img src={FooterIcon}/>
            </div>
            <div><p>Powered by Catoshi</p></div>
        </div>
    </div>
  )
}

export default Footer;