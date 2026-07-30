import { useState } from 'react'
import MissionCard from "./MissionCard";
import MissionAction from "./MissionAction";
import MissionFilter from "./MissionFilter";
import './MissionControl.css'

function MissionControl({ missions }) {

    const [missionList, setMissionList] = useState(missions);
    const [missionStatus, setMissionStatus] = useState(null);

    return (
        <div>
            {missionList.map(mission => (
                <MissionCard key={mission.id} id={mission.id} name={mission.name} status={mission.status} crew={mission.crew}/>
            ))}
            <div>
                <MissionFilter />
                <MissionAction />
            </div>
        </div>
    )
}

export default MissionControl