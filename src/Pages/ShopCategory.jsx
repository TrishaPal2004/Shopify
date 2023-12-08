import React from 'react'
import Popular from '../Components/Popular/Popular'
import Polar from '../Components/Polar/Polar'

const ShopCategory = ({category,banner}) => {
  if(category==="men")
  return (
    <div>
      <Polar banner={banner}/>
          </div>
  )
  else
  return(
    <div>
      <Popular banner={banner}/>
    </div>
    )
}
export default ShopCategory
