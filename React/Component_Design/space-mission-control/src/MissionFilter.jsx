import { useState } from 'react'
import './MissionFilter.css'

function MissionFilter({ status, children }) {
    const [active, setActive] = useState(status[0]);

    // const filteredMissions = status.filter(mission => filter === "All" || mission.status === filter);
    // const visible = active === "All" || childStatus === undefined || childStatus === active;   

    return (
        <div className='filter-provider'>
            <div className='filter-bar'>
                {status.map((s, i) => (
                    <button
                    key={s} 
                    className={`filter-button ${active === s ? "filter-button--active" : ""}` }
                    onClick={() => setActive(s)}>{s}</button> 
                ))}
            </div>
            <div className='filter-content'>
                {children.map((child, i) => {
                    const childStatus = child?.props?.status;
                    const isVisible = active === "All" || childStatus === undefined || childStatus === active;
                    
                    return (
                        <div key={child?.key ?? i} style={{ display: isVisible ? "contents" : "none"}}>
                            {child}
                        </div>
                    )
                })}
                </div>
            </div>
    )
}

export default MissionFilter