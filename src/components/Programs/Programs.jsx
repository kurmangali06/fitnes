import React from 'react'
import "./Programs.css"
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className='stroke-text'>EXPLORE OUR</span>
        <span>PROGRAMS </span>
        <span className='stroke-text'>TO SHAPE YOU </span>
      </div>
      <div className="programs-categories">
        {programsData.map((item)=> (
          <div className="category">
            {item.image}
            <span>{item.heading}</span>
            <span>{item.details}</span>
            <div className="join-now"><span>Join Now</span>
            <img src={RightArrow} alt="" /></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Programs