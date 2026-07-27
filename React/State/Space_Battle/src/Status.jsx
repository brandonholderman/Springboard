import { useState } from 'react'
import './Status.css'

function Status({ status }) {

    return (
        <div className='status-container'>
            <p>{status}</p>
        </div>
    )
}

export default Status
