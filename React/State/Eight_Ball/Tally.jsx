function Tally() {
    const [tally, setTally] = useState({});
    const [displayedValue, setDisplayedValue] = useState(null);

    // Function to display a value and tally it
    const showAndTallyValue = (value) => {
        // 1. Update the display state
        setDisplayedValue(value);

        // 2. Conditionally update the tally object
        setTally((prevTally) => {
            // Get the current count, defaulting to 0 if it doesn't exist yet
            const currentCount = prevTally[value] || 0;

            // Return a new object with the updated count for this value
            return {
                ...prevTally,
                [value]: currentCount + 1,
            };
        });
    };

    return (
        <div>
            <button onClick={() => showAndTallyValue("Red")}>Show Red</button>
            <button onClick={() => showAndTallyValue("Blue")}>Show Blue</button>

            <div>
                <h3>Currently Displayed: {displayedValue || "None"}</h3>
            </div>

            <div>
                <h3>Display Tally:</h3>
                <ul>
                    {Object.entries(tally).map(([value, count]) => (
                        <li key={value}>
                            {value}: {count} time{count !== 1 && "s"}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}