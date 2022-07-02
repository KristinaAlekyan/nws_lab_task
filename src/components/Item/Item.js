import './item.css';

function Item({item}) {
    return (
        <div className="item">
            <img src ={item.url} alt=""/>
        </div>
    );
}

export default Item;
