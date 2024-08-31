import './Item.css';

const Item = () => {
    const name = "ที่พัก";
    const amount = 1000;
    return (
        <li className='item'>
            {name} <span>-{amount}</span>
        </li>
    );
}

export default Item;
