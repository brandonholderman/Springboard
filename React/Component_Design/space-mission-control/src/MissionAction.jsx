import { useState } from 'react'
import './MissionAction.css'

function MissionAction({ id, updateStatus }) {


    return (
        <>
            <button className='action-button' onClick={() => updateStatus(id, "Active")}>Launch</button>
            <button className='action-button' onClick={() => updateStatus(id, "Completed")}>Complete</button>
        </>
    )
}

export default MissionAction