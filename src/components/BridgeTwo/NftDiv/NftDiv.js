import React from 'react';
import Button from './ButtonNFT/Button';
import CardDiv from './CardDiv/CardDiv';
import Claim from './Claim/Claim';
import "./NftDiv.css";
const NftDiv = () => {
  return (
    <div className='nft-wrapper'>
      <Button/>
      <CardDiv/>
      <Claim/>
    </div>
  )
}

export default NftDiv;