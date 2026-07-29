import { useState } from 'react'
import './Reset.css'


function resetButton() {
    location.reload('/')
}

function Reset() {
    return (
        <button className='reset-button' onClick={resetButton}>Reset Game</button>
    )
}

export default Reset
