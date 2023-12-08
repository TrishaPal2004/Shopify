import React from 'react'
import './CSS/login.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Email Address' />
          <input type="text" placeholder='Your name' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account?</p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By Continuing, i agree to the terms and conditions of the company's policy </p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
