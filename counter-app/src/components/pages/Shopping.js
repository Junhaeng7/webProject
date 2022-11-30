import React, { useState } from 'react'
import Items from '../Items'
import "../Items.css"

const sortOptionList = [
    {value:"lowPrice", name:"low Price"},
    {value:"highPrice", name:"high Price"},
]

const filterOptionList = [
    {value:"all", name:"All"},
    {value:"shoes", name:"Shoes"},
    {value:"top", name:"Top"},
    {value:"bottom", name:"Bottom"},
    {value:"other", name:"other"},
]

const ControlMenu = ({value,onChange,optionList})=>{
    return ( 
        <select className="ControlMenu" 
            value={value} 
            onChange={(e)=> onChange(e.target.value)}>
            {optionList.map((it,idx)=>(
            <option value={it.value}>
                {it.name}
            </option>))}
        </select>
    );
};

const Shopping = ({itemList}) => {
    // const [item, setItem] = useState({
    //     id:1,
    //     name: "Jeans",
    //     price: 2
    // });
    const [sortType,setSortType] = useState("lowPrice");
    const [filter,setFilter] =useState("all");

    const getItemsList =()=> {
        
        const filterCallBack = (item) => {
            if(filter === 'shoes') {
                return item.type === "shoes";
            }else if(filter === 'top') {
                return item.type === "top";
            }
            else if(filter === 'bottom') {
                return item.type === "bottom";
            }
            else if(filter === 'other') {
                return item.type === "other";
            }
        }
       
        const compare = (a,b)=>{
            if(sortType ==='lowPrice'){
                return parseInt(a.price) - parseInt(b.price);
            } else {
                return parseInt(b.price) - parseInt(a.price);
            }
        }
        const copyList = JSON.parse(JSON.stringify(itemList));
        
        const fileredList = filter === 'all' ? copyList : copyList.filter((it)=>filterCallBack(it));
        
        const sortedList = fileredList.sort(compare);
        return sortedList;
    };

  return (
    <div>
        <div className='controlMenu'>
            <ControlMenu 
                value={filter}
                onChange={setFilter}
                optionList={filterOptionList}
            />
            <ControlMenu 
                value={sortType}
                onChange={setSortType}
                optionList={sortOptionList}
            />
        </div>
        <div className='itemList'>
        {getItemsList().map((it) => (<Items key ={it.id} {...it}/>))}
        </div>
    </div>
  )
}

export default Shopping