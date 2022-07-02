import './sidebarItem.css';

function SidebarItem({name}) {

    return (
        <div className="sidebarItem">            
            <button onClick={()=> console.log("name", name)}>
                {name}
            </button>
            
        </div>
    );
}

export default SidebarItem;
