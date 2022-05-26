import React from 'react';
import "./Claim.css";
const Claim = () => {
  return (
    <div className='Claim'>
         <p>Total CRO earned</p>
         <div className='claim-button-div'>
             <div className='claim-input'>
                 <div className='input_div'>
                      <input type='text' />
                 </div>
                 <button id='claim-btn'>Claim</button>
             </div>
             <div className='claim-button'>
                 <button id='claim-btn' >Unstake</button>
             </div>
         </div>
    </div>
  )
}

export default Claim;