import { useState } from 'react'
import './Inventory.css'
import InventoryCard from './InventoryCard';

function Inventory() {

    const [inventoryItem, setInventoryItem] = useState([])

    function addInventoryItem() {
        
    }

    return (
        <div>
            <h2>Spacecraft Inventory Manager</h2>
            <h3>Add an Itemy to the Inventory</h3>
            <div className='form-container'>
                <form className='inventory-form'>
                {/* <label for="item-name">Item Name:</label> */}
                    <input className="item-input" placeholder='Item Name' />
                    <input className="item-input" placeholder='Quantity'/>
                    <input className="item-purpose" type='textarea' placeholder='Purpose'/>
                    <div className='checkbox-container'>
                        <label for="item-requirement">Agree to terms:</label>
                            <input name="item-requirement" type='checkbox' required/>
                    </div>
                    <div className='add-button'>
                        <button className='action-button' onClick={() => addInventoryItem(id, name, quantity, purpose)}>Add</button>
                    </div>
                </form>
            </div>
            <div>
                {inventoryItem.map((item, index) => (
                    <InventoryCard id={index} name={item.name} quantity={item.quantity} purpose={item.purpose}/>
                ))}
            </div>
        </div>
    );
}

export default Inventory;