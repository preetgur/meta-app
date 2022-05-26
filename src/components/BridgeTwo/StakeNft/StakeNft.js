import React from 'react';
import './StakeNft.css';
import BgOne from '../../../assests/bg-two.png';
import BgTwo from '../../../assests/bg-one.png';
import Stars from '../../../assests/stars.png';
import Group from '../../../assests/Group.png';
import NftDiv from '../NftDiv/NftDiv';
const StakeNft = () => {
  return (
    <div className='staking-div'>
        <div className='bg-one'><img src={BgOne}/></div>
        <div className='bg-two' ><img src={BgTwo}/></div>
        <div className='stars-one' ><img src={Stars}/></div>
        <div className='stars-two'><img src={Stars}/></div>
        <div className='footer-img'>
            <img src={Group} />
        </div>
        <div className='staking-text'>
            <h1>Stake NFTs</h1>
            <p>Stake your Croge NFTs here and watch your rewards grow!</p>
        </div>
        <NftDiv/>
    </div>
  )
}

export default StakeNft;