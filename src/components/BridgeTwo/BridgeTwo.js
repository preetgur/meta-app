import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import "./BridgeTwo.css";
import StakeNft from './StakeNft/StakeNft';
const BridgeTwo = () => {
  return (
    <div>
        <Navbar/>
        <StakeNft/>
        <Footer/>
    </div>
  )
}

export default BridgeTwo;