import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Items.css"

const Items= ({id,name,price}) => {
  const navigate = useNavigate();
  
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || ""
       
  const addCart = () => {
    let localCart = JSON.parse(localStorage.getItem("cartItems"))
    let info = {id,name,price,quantity:1};
    if(localCart) {
      if(localCart.find((it)=> parseInt(it.id) === parseInt(id))){
        localCart = localCart.map((it)=> {
        if(parseInt(it.id) === parseInt(id)){
          return {
            id,name,price,quantity: it.quantity +1
          }
        }else{
          return it
        }
        })
        localStorage.setItem("cartItems", JSON.stringify([...localCart]));
      }else{
        localStorage.setItem("cartItems", JSON.stringify([info,...localCart]));
      }
    }else{
      localStorage.setItem("cartItems", JSON.stringify([info]));
    }
    
    navigate("/cart")
  }

  return (
    <div className='Items'>
      <div onClick={()=>navigate(`/shop/${id}`)}>
        <img style={{ width: 250, height: 250 }} src = {process.env.PUBLIC_URL + `images/item${id}.jpeg`} alt="itemImage"/>
      </div>
      <div onClick={()=>navigate(`/shop/${id}`)}>
          <div className='name'>{name}</div>
          <div className='price'>${price}</div>
      </div>
      <button onClick={addCart}>Add to cart</button>
    </div>
  )
}

export default Items