import React from 'react'
import './Reasons.css'
import imange1 from '../../assets/image1.png'
import imange2 from '../../assets/image2.png'
import imange3 from '../../assets/image3.png'
import imange4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
  return (
    <div className="Reasons" id='reasons'>
      <div className="left-r">
        <img src={imange1} alt="" />
        <img src={imange2} alt="" />
        <img src={imange3} alt="" />
        <img src={imange4} alt="" />
      </div>
      <div className="right-r">
        <span>SOME REASONS</span>
        <div>
          <span className='stroke-text'>why</span>
          <span>choose us?</span>
          </div>

          <div className='details-r'>
          <div>
            <img src={tick} alt=""/>
            <span>OVER 140+ EXPERT COACHS</span>
            </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
            </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span></div>
          </div>
          <span style={{
        color: "var(--gray)",
        fontWeight: "normal"
      }}>OUR PARTNERS</span>
      <div className="partners">
        <img src={nb} alt="" />
        <img src={adidas} alt="" />
        <img src={nike} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Reasons