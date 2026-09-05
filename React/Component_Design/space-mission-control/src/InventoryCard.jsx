import './InventoryCard.css'

function InventoryCard({ id, name, quantity, purpose }) {

    // function deleteItem(itemId) {
    //     itemId === id ? 
    // }

    return (
        <div className='inventory-card'>
            <div className='inventory-info'>
                <h3>{name}</h3>
                <p>Quantity: {quantity}</p>
                <p>Purpose: {purpose}</p>
            </div>
            <div className='delete-container'>
                <button className='delete-button' onClick={() => deleteItem(id)}>Delete</button>
            </div>
        </div>
    )
}

export default InventoryCard;