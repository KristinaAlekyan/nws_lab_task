import { useState, useEffect } from 'react';
import Item from '../Item/Item';

import './content.css';

function Content() {
    const [items, setItems] = useState([]);    
    useEffect(() => {
		fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1 ')
			.then((response) => response.json())
			.then((res) => {
				setItems(res);
			});
	}, [])

    


    return (
        <div className="mainContainer">
            <button  >Load </button>
            <div className='main'>
                {items.map(i => {
                return(
                    <Item key={i.id}item ={i}/>
                )
                      
            })}</div>
        </div>
    );
}

export default Content;
