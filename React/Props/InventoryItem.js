function InventoryItem (props)
{
	return (
		<div>
			<h2>{props.name}</h2>
			<ul>
				<li>{props.type}</li>
				<li>{props.quantity}</li>
				<li>{props.price}</li>
			</ul>
		</div>
	);
}


/* TODO: Take the props. Set defaults to the quantity. */
// < !--TODO: Render the item's details. -->
// < !--TODO: Render the low stock alert based on the quantity of the item. -- >
// < !--TODO: Render the high value alert based on the total value of the item. -- >