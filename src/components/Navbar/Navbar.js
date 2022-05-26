import React from 'react';
import "./Navbar.css";
import NavLogo from '../../assests/croge-coin.png';
import MetaMask from '../../assests/metamask.png';
const Navbar = () => {
  return (
    <div className='navbar-container'>
    <div className='navbar-wrapper'>
       <div className='navbar-wrapper__logo'>
           <img src={NavLogo} />
       </div>
       <div className='navbar-wrapper__button'>
           <button>
               Connect Wallet <img src={MetaMask} />
           </button>
       </div>
    </div>
    </div>
  )
}

export default Navbar;