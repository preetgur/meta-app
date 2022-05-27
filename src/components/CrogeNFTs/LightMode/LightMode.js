import React from 'react';
import NftFooter from '../NFTFooter/NftFooter';
import NftNav from '../NFTNav/NftNav';
import './LightMode.css';
import LightNftComp from './LightNftComp/LightNftComp';
const LightMode = () => {
  return (
    <div>
        <NftNav color={'#1756AC'}/>
        <LightNftComp
        background={"#1755AC"}
        color={"linear-gradient(89.87deg, #477CD0 0.12%, #7AA0DA 99.9%)"}
        />
        <NftFooter color={"#1756AC"} />
    </div>
  )
}

export default LightMode;