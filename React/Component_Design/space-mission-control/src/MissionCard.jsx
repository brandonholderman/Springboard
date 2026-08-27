import MissionAction from "./MissionAction";
import './MissionCard.css'

function MissionCard({ id, name, status, crew, updateStatus }) {

    return (
        <div className='mission-card'>
            <div className='mission-info'>
                <h3>{name}</h3>
                <p>Status: {status}</p>
                <div className='crew-list'>
                    Crew: {crew.join(', ')}
                </div>
            </div>
            <div className='action-container'>
                <MissionAction id={id} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

export default MissionCard