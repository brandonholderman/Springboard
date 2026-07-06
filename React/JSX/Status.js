function Status (props) {
    return (
        <div>
            <ul>
                <li>{props.name} - {props.emoji} - {props.status}</li>
            </ul>
        </div>
    )
}