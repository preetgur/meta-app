import React,{useState} from 'react';
import "./LightNftComp.css";
import BgOne from '../../../../assests/a.png';
import BgTwo from '../../../../assests/b.png';
import Stars from '../../../../assests/stars.png';
import Dots from '../../../../assests/dots.png';
import NftCrog from "../../../../assests/nftcrog.png";
import { Progress } from 'antd';
const LightNftComp = ({color,background}) => {
    const [countVal,setCountVal] = useState(0);
    
    const handleIncrement =()=>{
        setCountVal(prevData=> prevData+1)
    }

    const handleDecrement =()=>{
        setCountVal(prevData=> prevData-1)
    }
    
  return (
    <div className='nft__light' style={{background:`${color}`}} >
       <div className='bg__top'>
            <img src={BgOne}/>
        </div>
        <div className='bg__bottom'>
            <img src={BgTwo}/>
        </div>
        <div className='star__one'>
            <img src={Stars}/>
        </div>
        <div className='star__two'>
            <img src={Stars}/>
        </div>
        <div className='dots__one'>
            <img src={Dots}/>
        </div>
        <div className='dots__two'>
            <img src={Dots}/>
        </div>
        <div className='nft_crogs'>
         <img src={NftCrog} />
        </div>
       <div className='mint-div' style={{background:`${background}`}}>
           <div className='mint_price'>
               <div className='minted-loader'>
               <Progress type="circle" percent={83} />
               </div>
               <div className='mint-header'>
                   <h1>Mint NFT</h1>
                   <p>Mint Price 0.1 Eth</p>
               </div>
           </div>
           <div className='minted__text'>
<p>830/1000</p>
<p style={{lineHeight:"0"}}> MINTED</p>
</div>
           <div className='mint-inputs'>
                  <div className='amount_handler-div'>
                 <div className='max-plus_div'>
                 <div className='amount-mint_div'>
                        <button onClick={handleDecrement} >-</button>
                        <p>{countVal}</p>
                        <button onClick={handleIncrement} style={{color:"#74C5E1"}}>+</button>
                   </div>
                   <div className='amount-btn-div'>
                       <button>MAX</button>
                   </div>
                   </div>
                        <span>Amount</span>
                
                 
                 </div>
                 <div className='max-amount_div'>
                 <input type="text" />
                 <label>Total</label>
                 </div>
                 <div className='mint__button-div'>
                     <button>Mint</button>
                 </div>
               </div> 
       </div>
    </div>
  )
}

export default LightNftComp;


