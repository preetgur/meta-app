import React from 'react';
import "./BridgePopUp.css";
import CrogeBridge from '../../../assests/crogebridge.png';
import InputComp from '../InputComp/InputComp';
import BgPolygonOne from '../../../assests/bg-two.png';
import BgPolygonTwo from '../../../assests/bg-one.png';
import Stars from '../../../assests/stars.png';
import Corons from '../../../assests/croge.png';
const BridgePopUp = () => {
    const Sdata = [
        {
            title:"From",
            titleimg: require ("../../../assests/cronos.png"),
            logo: require ("../../../assests/logoOne.png"),
            heading:"Cronos",
            para:"CRO",
            max:"Max",
            vector: require ("../../../assests/Vector.png")
        },
        {
            title:"To",
            // titleimg: require ("../../../assests/cronos.png"),
            logo: require ("../../../assests/logoTwo.png"),
            heading:"Ethereum",
            para:"ETH",
        },
    ]
  return (
    <div className='bridge-popup__wrapper'>
        <div className='polygon_one'>
            <img src={BgPolygonOne}/>
        </div>
        <div className='polygon_two'>
            <img src={BgPolygonTwo}/>
        </div>
        <div className='bgStar_one'>
            <img  src={Stars}/>
        </div>
        <div className='bgStar_two'>
            <img  src={Stars}/>
        </div>
        <div className='corons'>
            <img  src={Corons}/>
        </div>
        <div className='popup_div'>
        <div className='bridge-popup__wrapper-header'>
        <img src={CrogeBridge} />
        </div>
        {Sdata.map((data,index)=> {
            return <div key={index}>
            <InputComp  data={data} />
            </div>
              })}
        </div>
    </div>
  )
}

export default BridgePopUp;