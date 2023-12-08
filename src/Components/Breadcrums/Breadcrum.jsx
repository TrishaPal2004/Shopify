import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/home.png'
const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME<img src={arrow_icon} alt=""/>
    </div>
  )
}

export default Breadcrum
