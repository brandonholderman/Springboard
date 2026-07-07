function Ball(props) {

    function shakeBall(props) {
        let shake = Math.floor(Math.random() * props.numQues)
        return props.id === shake

        // for (let i = 0; i < props.numQues; i++) {
        //     console.log(props.id === shake)
        //     // return shake
        // }
    }

    // shakeBall(props)
    console.log(shakeBall(props))

    return (
        <div>
            <p style={{color: props.color}}>{props.msg} </p>
        </div>
    )
}