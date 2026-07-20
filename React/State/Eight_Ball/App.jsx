const { useState } = React

function App() {

    const eightBall = [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ];


    // const [fortuneID, setFortuneID] = useState(null);
    // const [colorChange, setColorChange] = useState(null);
    const [colorTally, setColorTally] = useState({});
    const [countColor, setCountColor] = useState(null);
    const [ball, setBall] = useState(eightBall);
    
    (() => {
        eightBall.forEach((val, index) => {
            val.id = index
        })
    })();

    function shakeBall(ballArr) {
        let shake = Math.floor(Math.random() * ballArr.length)
        return ballArr.find(data => data.id === shake)
    }

    function handleClick() {
        setBall(shakeBall(eightBall));
        tallyColors(ball.color)
    }

    function tallyColors(color) {
        if (color === undefined) {
            return
        } else {
            setCountColor(color)
        }

        setColorTally((totalTally) => {
            const currentCount = totalTally[color] || 0

            return {
                ...totalTally,
                [color]: currentCount + 1
            }
        })

        console.log(colorTally)
    };
    
    
    function showRecord() {
        console.log(Object.entries(colorTally))
    };

    function handleReset() {
        setBall(eightBall)
    };

    return (
        <>
            <div className="container">
                <Ball key={ball.id} id={ball.id} msg={ball.msg} color={ball.color} />
            </div>
            <div className="buttons">
                <button className="roll" onClick={handleClick}>Shake Magic Ball</button>
                <button className="roll" onClick={handleReset}>Reset Magic Ball</button>
                <button className="roll" onClick={showRecord}>Console</button>
            </div>
            <hr></hr>
            <ColorBox />
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));