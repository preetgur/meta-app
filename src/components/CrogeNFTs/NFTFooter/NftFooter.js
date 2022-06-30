import React from 'react';
import './NftFooter.css';
import {BsFacebook,BsInstagram,BsTwitter,BsYoutube} from "react-icons/bs";
import {FaTelegramPlane} from "react-icons/fa";
const NftFooter = ({color}) => {
  return (
    <div className='nft-footer' style={{background:`${color}`}}>
      <div className='footer-wrapper_div'>
      <div>
      <p>Croge Website</p>
        </div>   
        <div className='footer__links'>
          <a target="_blank" href='https://www.facebook.com/croge.crypto/'><BsFacebook size={24} /></a>
          <a target="_blank" href='https://www.instagram.com/croge.cro/'><BsInstagram size={24} /></a>
          <a target="_blank" href='https://twitter.com/CrogeCoin'> <BsTwitter size={24} /></a>
          <a target="_blank" href='https://www.youtube.com/channel/UCyuqUeF0rrC04e0VBpu8PcQ'><BsYoutube size={24} /></a>
          <a target="_blank" href='https://t.me/crogecoin'> <FaTelegramPlane size={24}/></a>
          </div>     
      </div>
    </div>
  )
}

export default NftFooter;