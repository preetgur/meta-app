import React from 'react';
import './NftNav.css';
import logoNFT from '../../../assests/Group 27.png'; 
import MetaMask from '../../../assests/metamask.png'; 
import {connectToWallet} from "../../connect-wallet/root";
import {useDispatch, useSelector} from 'react-redux'
const NftNav = ({color}) => {
  const dispatch = useDispatch();
  const {
    userAddress
} = useSelector((state) => state.root);
  return (
    <div className='navbar-wrapper-div' style={{backgroundColor:`${color}`}}>
      <div className='nav-div'>
      <div className='nav-title'>
            <img  src={logoNFT} />
        </div>
        <div className='nav-btn'>
        { !userAddress ? <button onClick={() => dispatch(connectToWallet())}>Connect Wallet   </button> : <button>Connected {userAddress.substring(0,5)} </button> }
        </div>
      </div>
    </div>
  )
}

export default NftNav;