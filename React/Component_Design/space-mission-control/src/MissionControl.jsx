import { useState } from 'react'
import MissionCard from "./MissionCard";
import MissionFilter from "./MissionFilter";
import './MissionControl.css'

function MissionControl({ missions }) {

    // each time a filter button is clicked, we will update state missionList to on missions that match that category. 
    const [missionList, setMissionList] = useState(missions);
    // const [missionStatus, setMissionStatus] = useState(null);

    // const filterItem = (curcat) => {
    //     const newItem = Data.filter((newVal) => {
    //         return newVal.category === curcat;
    //         // comparing category for displaying data
    //     });
    //     setItem(newItem);
    // };

    // function filterMission(selectedStatus) {
    //     if (selectedStatus === )
    // }


    return (
        <div>
            <MissionFilter status={missionList.map(mission => mission.status)}/>
            {/* <MissionFilter status={missionStatus} onClick={() => filterMission()} /> */}
            {missionList.map(mission => (
                <MissionCard key={mission.id} id={mission.id} name={mission.name} status={mission.status} crew={mission.crew}/>
            ))}
        </div>
    )
}

export default MissionControl