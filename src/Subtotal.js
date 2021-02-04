import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                    <p>Subtotal({}items):
                    <strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox"/>This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={500}
                displayType={"text"}
                thousandSeparamtor={true}
                prefix={"$"}
            />
            <button>proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
