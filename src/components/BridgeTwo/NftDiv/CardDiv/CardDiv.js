import React from 'react';
import './CardDiv.css';
import LogoOne from '../../../../assests/s1.png';
import LogoTwo from '../../../../assests/s2.png';
const CardDiv = () => {
  return (
    <div className='card-div-wrapper' >
       <img src={LogoOne} />
       <img src={LogoTwo} />
       <img src={LogoOne} />
       <img src={LogoTwo} />
       <img src={LogoTwo} />
    </div>
  )
}

export default CardDiv;