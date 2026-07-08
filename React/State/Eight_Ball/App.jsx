const react = require('react')
// import { useState } from 'react'


function App() {

    const ball = [
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
        ball.forEach((val, index) => {
            val.id = index
        })
    })();

    function shakeBall(ballArr) {
        let shake = Math.floor(Math.random() * ballArr.length)
        return ballArr.find(data => data.id === shake)
    }

    let data = shakeBall(ball)  

    function handleClick() {
        document.location.reload()
    }

    return (
        <>
            <div className="container">
                <Ball key={data.id} id={data.id} msg={data.msg} color={data.color} />
            </div>
            <button className="roll" onClick={handleClick}>Shake Magic Ball</button>
        </>
    ) 
}

ReactDOM.render(<App />, document.getElementById("root"));