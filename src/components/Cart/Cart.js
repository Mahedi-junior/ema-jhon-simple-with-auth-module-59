import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);

    let total = 0;
    let shipping = 0;
    let stock = 500;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        //extra myself
        let stok = product.stock;
        stok = 1;
        stock = stock - stok;
    }
    const tax = parseFloat((total * .1).toFixed(2));
    const grandtotal = total + shipping + tax;

    return (
        <div className='cart-details'>
            <h3>Order Summary :</h3>
            <p>Total stock: ${stock}</p>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandtotal}</h4>
            {props.children}
        </div>
    );
};

export default Cart;