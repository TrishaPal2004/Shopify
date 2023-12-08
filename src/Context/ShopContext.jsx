import React,{ createContext } from 'react';
import all_product from '../Components/Assets/all-product';
export const ShopContext = createContext(null);
const ShopContextprovider = (props) => {
    
   const contextValue ={all_product};
   return(
    <ShopContextprovider value={contextValue}>
            {props.children}
    </ShopContextprovider>
   )
}

export default ShopContextprovider;

