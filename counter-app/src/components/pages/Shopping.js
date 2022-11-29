import React, { useState } from 'react'
import Items from '../Items'
import "../Items.css"

const Shopping = ({itemList}) => {
    // const [item, setItem] = useState({
    //     id:1,
    //     name: "Jeans",
    //     price: 2
    // });
    const getItemsList = () => {
        const copyList = JSON.parse(JSON.stringify(itemList));
        return copyList;
    }
  return (
    <div className='itemList'>
        {getItemsList().map((it) => (<Items key ={it.id} {...it}/>))}
    </div>
  )
}

export default Shopping