import React from 'react'
import DarkMode from './CrogeNFTs/DarkMode/DarkMode';
import LightMode from './CrogeNFTs/LightMode/LightMode';
import { Switch } from 'antd';
import {BsFillMoonStarsFill} from "react-icons/bs";
import './CrogeNFTs/LightMode/LightNftComp/LightNftComp.css';
import ToggleTheme from "react-toggle-theme";
 
const Layout = () => {
    const [isDark,setIsDark] =React.useState(true);
    const [currentTheme, setCurrentTheme] = React.useState();
    const onChange = () => {
        setIsDark(isDark=>!isDark)
        if(isDark === true){
          setCurrentTheme("dark")
        }
        else{
          setCurrentTheme("light")
        }
       
      };
  return (
    <div>
           <div className='toggler'>
           <ToggleTheme selectedTheme={currentTheme}  onChange={onChange} />
        {/* <Switch style={{backgroundImage:<BsFillMoonStarsFill/>}}  onChange={onChange} /> */}

        </div>
        {/* <button onClick={onChange}>Toogle</button> */}
        {
            isDark ? <LightMode /> : <DarkMode />
        }
    </div>
  )
}

export default Layout