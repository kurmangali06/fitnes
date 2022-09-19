import React from 'react'
import { useRef } from 'react'
import "./Join.css"

const Join = () => {
  const from = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  };
  return (
    <div className="Join" id='join-us'>
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className='stroke-text'>WITH US?</span>
        </div>
      </div>
      <div className='right-j'>
        <form ref={from} action="" className="email-container" onSubmit={sendEmail}>
          <input type="email" placeholder='Enter your email' name='user_email' />
            <button className='btn btn-j'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join