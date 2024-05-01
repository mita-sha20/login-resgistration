import React from 'react';
import "./style.css";
import { Input } from 'antd';

const Homepage = () => {
  return (
    <>

   <div>
   <div className='home-main'>
       <div className='home-icon'>
       <picture>
                <img
                  className="icon_pic"
                  src="./images/Icon.png"
                  alt="register"
                />
              </picture>
       </div>
       <div className='home-txt'>
          <h2>List  of Taks</h2>
          <p>Facilite sua ida ao supermercado!</p>
          <picture>
                <img
                  className="separete_pic"
                  src="./images/Separator.png"
                  alt="register"
                />
              </picture>
       </div>
    </div>
    <div className='input'>
        <div className='input-box'>
        <Input placeholder="Items" />
        </div>
        <div className='input-box'>
        <Input placeholder="Description" />
        </div>
        <div className='input-box'>
        <Input placeholder="+" />
        </div>
    </div>
   </div>
      
    </>
  )
}

export default Homepage
