import React from 'react'
import './Polar.css'

import Item from '../Item/item.jsx'
import Details from '../Assets/details.js'

const Polar = (props) => {
  return (
    <div className='polar'>
      <div className="out"><img src={props.banner} alt=""/></div>
        <h1>POPULAR IN MEN</h1>
        <hr/>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Sort by
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#"><b>Trending now ~~</b></a></li>
    <li><a class="dropdown-item" href="#"><b>Price high to low</b></a></li>
    <li><a class="dropdown-item" href="#"><b>Price low to high</b></a></li>
  </ul>
</div>
        <div className="polar-item">
            {Details.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div> 
        
    </div>
  )
  
}
export default Polar