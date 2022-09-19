import React from 'react'
import "./Footer.css"
import Github from '../../assets/github.png'
import Intagram from '../../assets/instagram.png'
import Telegram from '../../assets/telegramm.png'
import Logo from '../../assets/logo.png'


const Footer = () => {
  return (
    <div className='Footer-container'>
      <hr />
      <div className="footer">
        <div className="social-links">
        <img src={Github} alt="" />
      <img src={Intagram} alt="" />
      <img src={Telegram} alt="" />
        </div>
        <div className="logo-f">
      <img src={Logo} alt="" />
      </div>
      </div>
      
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
      </div>
  )
}

export default Footer