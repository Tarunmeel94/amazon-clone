import React from 'react';
import "./Checkout.css";
import Subtotal  from "./Subtotal.js";
function Checkout() {
    return (
        <div className="checkout">
        <div className="checkout_left">
            <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
        
        <div>
           <h1 className="checkout_title">Your shoping Basket</h1> 
           {/* basketItem */}
           {/* basketItem */}
           {/* basketItem */}
           {/* basketItem */}
           {/* basketItem */}
           {/* basketItem */}
        </div>
        </div>
        <div className="checkout_right">
           <Subtotal/>
        </div>
        </div>

    )
}

export default Checkout