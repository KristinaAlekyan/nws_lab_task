import './sidebarItem.css';

function SidebarItem({item, setCategory}) {
    return (
        <div className="sidebarItem">            
            <button onClick={()=> setCategory(item.id)}>
                {item.name}
            </button>
            
        </div>
    );
}

export default SidebarItem;
