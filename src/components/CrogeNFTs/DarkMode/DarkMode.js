import React from 'react';
import LightNftComp from '../LightMode/LightNftComp/LightNftComp';
import NftFooter from '../NFTFooter/NftFooter';
import NftNav from '../NFTNav/NftNav';
import './DarkMode.css';
const DarkMode = () => {
  return (
    <div>
      <NftNav color={"#0E2B4C"} />
      <LightNftComp 
         background={"#0F2B49"}
        color={" radial-gradient(50% 60.97% at 50% 45.03%, #003586 0%, #031024 98.96%)"}
      />
      <NftFooter
      color={"#0E2B4C"}
      />
    </div>
  )
}

export default DarkMode;