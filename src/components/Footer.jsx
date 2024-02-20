import React  from 'react';
import GitHub from '../assets/github.png';
import Twitter from '../assets/gorjeo.png';
import Instagram from '../assets/instagram.png';
import './Footer.css'




function Footer(){
    return(
        <div className='footer'>
                <a href="https://github.com/" target="_blank">
                    <img className="gitHub" src={GitHub} alt="github"/>
                </a>
                <a href="">
                    <img className='twitter' src={Twitter} alt="twitter" />
                </a>
                <a href="">
                    <img className="instagram" src={Instagram} alt="instagram" />
                </a>
        </div>
    )
}

export default Footer;