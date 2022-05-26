import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import "./BridgeOne.css";
import CrogeBridge from './CrogeBridge/CrogeBridge';
const BridgeOne = () => {
  return (
    <div>
      <Navbar/>
      <CrogeBridge/>
      <Footer/>
    </div>
  )
}

export default BridgeOne;