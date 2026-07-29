import { useState } from 'react'
import './Player.css'

function Player(props) {
    return (
        <p className='player-health'>Player Health: {props.health}</p>
    ) 
}

export default Player
