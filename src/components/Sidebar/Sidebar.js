import './sidebar.css';

import { useState, useEffect } from 'react';
import SidebarItem from '../SidebarItem/SidebarItem';

function Sidebar({setCategory}) {
    const [categories, setCategories] = useState([])   

    useEffect(() => {
		fetch('https://api.thecatapi.com/v1/categories')
			.then((response) => response.json())
			.then((res) => {
				setCategories(res);
			});
	}, [])

    return (
        <div className="sidebar">
            {categories.map(i => {
                return(
                    <div key={i.id}>
                        <SidebarItem
                            setCategory={setCategory}
                            item={i} 
                        />
                    </div>
                )                
            })}
        </div>
    );
}

export default Sidebar;
