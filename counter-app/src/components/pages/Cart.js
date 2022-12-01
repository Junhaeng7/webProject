import React, { useEffect, useState } from 'react'
import "../Items.css"

const Cart = () => {
    const[total,setTotal] = useState(0);
    // const getCartList = () => {
    // }
    const localCart = JSON.parse(localStorage.getItem("cartItems"));
    useEffect(()=> {
        let sum = 0
        if(localCart) {
            for(let i = 0 ; i < localCart.length ; i++) {
                sum += parseInt(localCart[i].price)*parseInt(localCart[i].quantity);
            }
            setTotal(sum);
        }
    },[]);

    

    return (
        <div>
            <div className='cartItems'>
                {localCart.map(item => 
                <div className='cartItem'>
                    <img style={{ width: 100, height: 100 }} src = {process.env.PUBLIC_URL + `images/item${item.id}.jpeg`} alt="itemImage"/>
                    <div>
                        <div>Name : {item.name}</div>
                        <div>Price : ${item.price}</div>
                        <div>Quantity : {item.quantity}</div>
                    </div>
                </div>)}
            </div>
            total : ${total}
            
        </div>
    )
}

export default Cart