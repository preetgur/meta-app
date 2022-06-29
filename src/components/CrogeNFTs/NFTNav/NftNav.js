import React, { useRef } from 'react';
import './NftNav.css';
import logoNFT from '../../../assests/Group 27.png'; 
import MetaMask from '../../../assests/metamask.png'; 
import {connectToWallet, disconnectWallet,providerOptions} from "../../connect-wallet/root";
import {useDispatch, useSelector} from 'react-redux'
import {RiShutDownLine} from 'react-icons/ri'
import Web3Modal from 'web3modal'

const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions // required
});

const NftNav = ({color}) => {
  const dispatch = useDispatch();
  const {
    userAddress,
    provider
} = useSelector((state) => state.root);

React.useEffect(()=>{

  if (web3Modal?.cachedProvider) {
    dispatch(connectToWallet());
  }
},[])
  return (
    <div className='navbar-wrapper-div' style={{backgroundColor:`${color}`}}>
      <div className='nav-div'>
      <div className='nav-title'>
            <img  src={logoNFT} />
        </div>
        <div className='nav-btn'>
        { !userAddress ? <button onClick={() => dispatch(connectToWallet())}>Connect Wallet   </button> : <button>Connected {userAddress.substring(0,5)} ...{userAddress.substr(userAddress.length - 5)} </button> }
        {userAddress && <button className='nav-btn-logout' onClick={()=>dispatch(disconnectWallet())}><RiShutDownLine/></button>}
        </div>
      </div>
    </div>
  )
}

export default NftNav;