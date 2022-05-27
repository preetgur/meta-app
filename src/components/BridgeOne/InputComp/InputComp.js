import React from 'react';
import "./InputComp.css";
import Cronos from '../../../assests/cronos.png';
import Logo from '../../../assests/logoOne.png';
const InputComp = (props) => {
    console.log(props)
  return (
    <div className='input_comp-wrapper'>
        <div className='input_title'>
            <p>{props?.data?.title}</p>
            <img src={props?.data?.titleimg ? props?.data?.titleimg : ""}/>
        </div>
        <div className='input_field'> 
            <div className='input_field__wrapper'>
               <div className='input_content'>
               <div className='image-wrapper'>
                <img src={props?.data?.logo}/>
                </div>
                <div className='title__div'>
                    <p>{props?.data?.heading}</p>
                    <p id="title_para">{props?.data?.para}</p>
                </div>
               </div>
                <div className='maxx-div'>
                    <p>{props?.data?.max ? props?.data?.max :''}</p>
                </div>
            </div>
            <div className='value_div'>
                <p>=$0.00</p>
                <input type='text' placeholder='0.00'/>
            </div>
        </div>
        <div style={{textAlign:"center"}}>
       <a href='#'><img src={props?.data?.vector ? props?.data?.vector : "" }  /></a>
        </div>
        
        
    </div>
  )
}

export default InputComp;