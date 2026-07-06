function InventoryItem ({name="Laser Beam", type="Gamma Ray", quantity=1, price=1000000000 }) {

	let messageVal = () => {
		let under = "Low Quantity. Restock."
		let over = "Inventory exceeds $1000 threshold. Extra protection suggested."

		if (quantity < 5) return under
		if (quantity * price > 1000) return over
	}

	return (
		<div>
			<ul>
				<h2>{name}</h2>
				<li>{type}</li>
				<li>{quantity}</li>
				<li>{price}</li>
			</ul>
			<p style={{ color: "red" }}>{messageVal()}</p>
		</div>
	);
}

/* TODO: Take the props. Set defaults to the quantity. :: DONE */
// < !--TODO: Render the low stock alert based on the quantity of the item. -- > :: DONE
// < !--TODO: Render the high value alert based on the total value of the item. -- > :: DONE