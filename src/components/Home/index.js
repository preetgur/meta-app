import React, { useRef } from 'react';
import MetaMask from '../../assests/metamask.png'; 
import {connectToWallet, disconnectWallet,providerOptions, updateChainId, updateUserAddress} from "../connect-wallet/root";
import {useDispatch, useSelector} from 'react-redux'
import {RiShutDownLine} from 'react-icons/ri'
import Web3Modal from 'web3modal'
import "./index.css"

const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions // required
});

const Home = () => {
  const dispatch = useDispatch();
  const {
    userAddress,
    chainId,
    provider,
    instance
} = useSelector((state) => state.root);

React.useEffect(()=>{

  if (web3Modal?.cachedProvider) {
    dispatch(connectToWallet());
  }
},[])


React.useEffect(() => {
    if (instance?.on) {

        console.log("#### instance ####",instance)
      const handleAccountsChanged = (accounts) => {
        console.log("accountsChanged", accounts);
        if (accounts) dispatch(updateUserAddress(accounts[0])) //  dispatch store action

      };

      const handleChainChanged = (_hexChainId) => {
    
        console.log("chainChanged", _hexChainId);
        dispatch(updateChainId(_hexChainId)) //  dispatch store action

      };

      const handleDisconnect = () => {
        console.log("disconnect");
        dispatch(disconnectWallet());
      };

      instance.on("accountsChanged", handleAccountsChanged);
      instance.on("chainChanged", handleChainChanged);
      instance.on("disconnect", handleDisconnect);

      return () => {
        if (instance.removeListener) {
          instance.removeListener("accountsChanged", handleAccountsChanged);
          instance.removeListener("chainChanged", handleChainChanged);
          instance.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [instance]);
  return (
<div className='buttons'>
<div className="buttons__wrapper">

    {/* <div className='connect__metamask'>
        <button className='connect__metamask__button button' onClick={connectToWallet}> metamask </button>
    </div>
    <div className="connect__coinbase">
        <button className='connect__coinbase__button button'>coinbase </button>
    </div> */}

    
        {!userAddress ? (
            <button onClick={() => dispatch(connectToWallet())}>Connect Wallet</button>
          ) : (
            <button onClick={()=>dispatch(disconnectWallet())}>Disconnect</button>
          )}

        {userAddress &&
        
        <div className='user_detail'>
            <p>Account : {userAddress}</p>
            <p>Network ID : {chainId}</p>

        </div>}
</div>

</div>
  )
}

export default Home;