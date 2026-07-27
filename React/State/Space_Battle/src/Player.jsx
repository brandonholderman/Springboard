import { useState } from 'react'
import './App.css'

function Player() {
    const [count, setCount] = useState(100)

    return <p>{count}</p>
}

export default Player
