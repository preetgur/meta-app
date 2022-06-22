import React, { useRef } from 'react';
import './NftNav.css';
import logoNFT from '../../../assests/Group 27.png'; 
import MetaMask from '../../../assests/metamask.png'; 
import {connectToWallet, disconnectWallet, setUserAddress} from "../../connect-wallet/root";
import {useDispatch, useSelector} from 'react-redux'
import {RiShutDownLine} from 'react-icons/ri'
import Web3Modal from 'web3modal'
import { providerOptions } from '../../connect-wallet/root';
import {BigNumber, ethers} from 'ethers'

const NftNav = ({color}) => {
  const dispatch = useDispatch();
  const {
    userAddress,
    provider
} = useSelector((state) => state.root);

const web3Modal = new Web3Modal({
  providerOptions,
})
  const providerRef = useRef(null)
  const web3ModalRef = useRef(null)

  const logoutHandler = ()=>{
    dispatch(disconnectWallet(web3ModalRef.current,providerRef.current))
  }

  const checkIfUserLogin =  React.useCallback(async()=>{

    if(web3Modal?.cachedProvider){
      
      web3ModalRef.current = web3Modal;
      const instance = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(instance)
      providerRef.current = new ethers.providers.Web3Provider(instance)
      const accounts = await provider.listAccounts()
      const {chainId} = await provider.getNetwork()
      if(!accounts?.length){
        logoutHandler()
        return
      }
      dispatch(setUserAddress({account:accounts[0],provider,web3Modal,chainId}))
    }

  },[userAddress,web3Modal?.cachedProvider])


  React.useEffect(()=>{
    checkIfUserLogin()
  },[web3Modal?.cachedProvider])
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