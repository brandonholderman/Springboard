function Ball({ color="black", msg="Ask the ball your question" }) {
    return (
        <div className="ball" style={{backgroundColor: color}}>
            <p className="fortune" style={{ color: "white" }}>{msg} </p>
        </div>
    )
}