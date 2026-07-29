import { useState } from 'react'
import './Enemy.css'

function Enemy(props) {
    return (
        <p className='enemy-health'>Enemy Health: {props.health}</p>
    )
}

export default Enemy
