// const react = require('react')
// import { useState } from 'react'
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

    (() => {
        eightBall.forEach((val, index) => {
            val.id = index
        })
    })();

    const [ball, setBall] = useState(eightBall)

    function shakeBall(ballArr) {
        let shake = Math.floor(Math.random() * ballArr.length)
        return ballArr.find(data => data.id === shake)
    }

    function handleClick() {
        setBall(shakeBall(eightBall))
    }

    function handleReset() {
        document.location.reload()
    }

    return (
        <>
            <div className="container">
                <Ball key={ball.id} id={ball.id} msg={ball.msg} color={ball.color} />
            </div>
            <div className="buttons">
                <button className="roll" onClick={handleClick}>Shake Magic Ball</button>
                <button className="roll" onClick={handleReset}>Reset Magic Ball</button>
            </div>
        </>
    ) 
}

ReactDOM.render(<App />, document.getElementById("root"));