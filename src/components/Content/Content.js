import { useState, useEffect } from 'react';
import Item from '../Item/Item';

import './content.css';

function Content({category, count, setCount}) {
    const [items, setItems] = useState([]);
    

    useEffect(() => {
        if (category ===""){
            return
        } else 
            fetch(`https://api.thecatapi.com/v1/images/search?limit=${10*count}&page=1&category_ids=${category}`)
                .then((response) => response.json())
                .then((res) => {
                    setItems(res);
                });
	}, [category, count])  
    

    return (
        <div className="mainContainer">
            <button  onClick={()=>setCount(count+1)}>Load </button>
            <div className='main'>
                {items.map(i => {
                return(
                    <Item key={i.id} item ={i}/>
                )                      
            })}</div>
        </div>
    );
}

export default Content;
