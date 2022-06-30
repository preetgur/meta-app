import React from 'react';
import "./Footer.css";
import {BsFacebook,BsYoutube,BsTwitter} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiOutlineInstagram } from 'react-icons/ai';
import FooterIcon from "../../assests/tokenselect.png";
const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-header'><p>Croge Website</p></div>
        <div className='footer-icons' >
        <a target="_blank" href='https://www.facebook.com/croge.crypto/'>< BsFacebook  size={20} /></a>    
            <a target="_blank" href='https://www.instagram.com/croge.cro/'><AiOutlineInstagram size={20} /> </a>
            <a target="_blank" href='https://twitter.com/CrogeCoin'> <BsTwitter size={20} /></a>
             <a target="_blank" href='https://www.youtube.com/channel/UCyuqUeF0rrC04e0VBpu8PcQ'><BsYoutube size={20} /></a>
             <a target="_blank" href='https://t.me/crogecoin'><FaTelegramPlane size={20} /></a>
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