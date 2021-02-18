import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal  from "./Subtotal.js";
function Checkout() {
    const [{basket,user},dispatch]=useStateValue();
    const email=user?.email;
    return (
        <div className="checkout">
        <div className="checkout_left">
            <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
        
        <div>
            <h3>hello,{email}</h3>
           <h1 className="checkout_title">your shoping Basket</h1> 
          <h2>
              {basket.map(item=>(
              <CheckoutProduct   
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
               />

              ))}
          </h2>
        </div>
        </div>
        <div className="checkout_right">
           <Subtotal/>
        </div>
        </div>

    )
}

export default Checkout
