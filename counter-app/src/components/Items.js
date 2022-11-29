import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Items.css"

const Items= ({id,name,price}) => {
    const navigate = useNavigate();

    const env = process.env;
    env.PUBLIC_URL = env.PUBLIC_URL || ""

    
  return (
    <div className='Items'>
        <div onClick={()=>navigate(`/shop/${id}`)}>
            <img style={{ width: 300, height: 300 }} src = {process.env.PUBLIC_URL + `images/item${id}.jpeg`} alt="itemImage"/>
        </div>
        <div onClick={()=>navigate(`/shop/${id}`)}>
            <div>{name}</div>
            <div>${price}</div>
        </div>
        <button>Add to cart</button>
    </div>
  )
}

export default Items