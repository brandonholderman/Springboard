import { useState } from 'react'
import MissionAction from "./MissionAction";
import './MissionCard.css'

function MissionCard({ id, name, status, crew }) {

    return (
        <div className='mission-card'>
            <h3>{name}</h3>
            <p>Status: {status}</p>
            <div className='crew-list'>
                Crew: {crew.map((c, i) => <p key={i}>{c}</p>)}
            </div>
            <div>
                <MissionAction />
            </div>
        </div>
    )
}

export default MissionCard