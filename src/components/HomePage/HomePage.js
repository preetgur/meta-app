import React from 'react';
import "./HomePage.css";
import Crossing from '../../assests/the crossing.png';
import Cross from "../../assests/Crossing pattern.png";
const HomePage = () => {
  return (
    <div className='croge-homepage'>
       <div className='croge_text'>
           <p>Lil Floki will be onboarded to </p>
           <div><img src={Crossing}/></div>
       </div>
       <div className='croge-card-holder'>
        <div className='lil-floki'>
            <p>
            LIL FLOKI
            </p>
        </div>
        <div className='crossing-div'>
            <img src={Cross}/>
        </div>
        <div className='lil-floki-one'>
           <p>
            catoshi

           </p>
            </div>
       </div>
       <div className='link-div'>
           <div>
               <a href='#'>lilfloki.com | @thelilfloki | t.me/thelilfloki</a>
           </div>
           <div className='cat'>
               <a href='#'>catoshi.tech | @originalcatoshi | thecrossing.io</a>
           </div>
       </div>
    </div>
  )
}

export default HomePage;