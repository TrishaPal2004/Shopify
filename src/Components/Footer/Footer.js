import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo.png';
import instagram from '../Assets/instagram.png'
import whatsapp from '../Assets/whatsapp.png'
import pinterest from '../Assets/pinterest.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" /> 
        <p>SHOPPER</p>
        </div>
    <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
    </ul>
    <div className="footer-social-icons">
         <div className="footer-icons-container">
             <img src={instagram} alt=" "/>
         </div>
         <div className="footer-icons-container">
             <img src={whatsapp} alt=" "/>
         </div>
         <div className="footer-icons-container">
             <img src={pinterest} alt=" "/>
         </div>      
    </div>
   <div className="footer-copyright">
    <hr/>
    <p>Copyright @ 2023 - All Rights reserved</p>
   </div>
    </div>
  )
}

export default Footer
