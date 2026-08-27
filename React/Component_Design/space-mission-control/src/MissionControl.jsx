import { useState } from 'react'
import MissionCard from "./MissionCard";
import MissionFilter from "./MissionFilter";
import MissionAction from './MissionAction';
import './MissionControl.css'

function MissionControl({ missions }) {

    const [missionList, setMissionList] = useState(missions);
    const status_options = ['All', 'Planned', 'Active', 'Completed'];

    function updateMissionStatus(id, newStatus) {
        setMissionList(currentMission => currentMission.map(mission => mission.id === id ? {...mission, status: newStatus } : mission))
    }

    return (
        <div>
            <MissionFilter status={status_options}>
                {missionList.map(mission => (
                    <MissionCard key={mission.id} id={mission.id} name={mission.name} status={mission.status} crew={mission.crew} updateStatus={updateMissionStatus}/>
                ))}
            </MissionFilter>
        </div>
    )
}

export default MissionControl;