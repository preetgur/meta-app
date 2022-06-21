import React from 'react';
import './NftNav.css';
import logoNFT from '../../../assests/Group 27.png'; 
import MetaMask from '../../../assests/metamask.png'; 
import {connectToWallet, disconnectWallet} from "../../connect-wallet/root";
import {useDispatch, useSelector} from 'react-redux'
import {RiShutDownLine} from 'react-icons/ri'

const NftNav = ({color}) => {
  const dispatch = useDispatch();
  const {
    userAddress,
    web3Modal,
    provider
} = useSelector((state) => state.root);


  const checkIfUserLogin =  React.useCallback(()=>{
    userAddress && dispatch(connectToWallet())
  },[userAddress])

  const logoutHandler = ()=>{

    dispatch(disconnectWallet(web3Modal,provider))
  }

  React.useEffect(()=>{
    checkIfUserLogin()
  },[])
  return (
    <div className='navbar-wrapper-div' style={{backgroundColor:`${color}`}}>
      <div className='nav-div'>
      <div className='nav-title'>
            <img  src={logoNFT} />
        </div>
        <div className='nav-btn'>
        { !userAddress ? <button onClick={() => dispatch(connectToWallet())}>Connect Wallet   </button> : <button>Connected {userAddress.substring(0,5)} ...{userAddress.substr(userAddress.length - 5)} </button> }

        
        {userAddress && <button className='nav-btn-logout' onClick={logoutHandler}><RiShutDownLine/></button>}
        </div>
      </div>
    </div>
  )
}

export default NftNav;