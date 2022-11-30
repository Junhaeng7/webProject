import React, { useEffect, useState } from 'react'

const Cart = ({cartList}) => {
    const[total,setTotal] = useState(0);
    const getCartList = () => {

    }

    // for(let i = 0; i < 4; i++ ) {
    //     setTotal(total + parseInt(cartList[i].price));
    //     console.log(total)
    // }
    console.log(parseInt(cartList[0].price))
    return (
        <div>{total}</div>
    )
}

export default Cart