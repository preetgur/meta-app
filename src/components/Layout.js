import React from 'react'
import DarkMode from './CrogeNFTs/DarkMode/DarkMode';
import LightMode from './CrogeNFTs/LightMode/LightMode';
import { Switch } from 'antd';
import './CrogeNFTs/LightMode/LightNftComp/LightNftComp.css';
const Layout = () => {
    const [isDark,setIsDark] =React.useState(true);

    const onChange = () => {
        console.log(`switch to `);
        console.log("state",isDark)
        setIsDark(isDark=>!isDark)
       
      };
  return (
    <div className='layout-div'>
           <div className='toggler'>
        <Switch defaultChecked onChange={onChange} />
        </div>
        {/* <button onClick={onChange}>Toogle</button> */}
        {
            isDark ? <LightMode /> : <DarkMode />
        }
    </div>
  )
}

export default Layout