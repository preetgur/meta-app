import React from 'react';
import './NftNav.css';
import logoNFT from '../../../assests/Group 27.png'; 
import MetaMask from '../../../assests/metamask.png'; 
const NftNav = ({color}) => {
  return (
    <div className='navbar-wrapper-div' style={{backgroundColor:`${color}`}}>
      <div className='nav-div'>
      <div className='nav-title'>
            <img  src={logoNFT} />
        </div>
        <div className='nav-btn'>
            <button>Connect Wallet  <img src={MetaMask} /></button>
        </div>
      </div>
    </div>
  )
}

export default NftNav;