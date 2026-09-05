import { useState } from 'react'
import './Inventory.css'
import InventoryCard from './InventoryCard';

function Inventory() {

    const [inventoryItem, setInventoryItem] = useState([]);

    function handleSubmit(e) {
        e.preventDefault()
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form));

        setInventoryItem(itemList => [
            ...itemList, { id: crypto.randomUUID(), ...data }
        ]);

        form.reset();
    }

    return (
        <div>
            <h2>Spacecraft Inventory Manager</h2>
            <h3>Add an Item to the Inventory</h3>
            <div className='form-container'>
                <form className='inventory-form' onSubmit={handleSubmit}>
                    <input className="item-input" placeholder='Item Name' name='itemName' />
                    <input className="item-input" placeholder='Quantity' name='quantity' />
                    <textarea className="item-purpose" placeholder='Purpose' name='purpose' />
                    <div className='checkbox-container'>
                        <label>Agree to terms:
                            <input name="item-requirement" type='checkbox' required/>
                        </label>
                    </div>
                    <div className='add-button'>
                        <button className='action-button'>Add</button>
                    </div>
                </form>
            </div>
            <div>
                {inventoryItem ? <h4 className='list-heading'>Inventory List</h4> : ''}
                {inventoryItem.map((item, index) => (
                    <InventoryCard id={index} name={item.itemName} quantity={item.quantity} purpose={item.purpose}/>
                ))}
            </div>
        </div>
    );
}

export default Inventory;