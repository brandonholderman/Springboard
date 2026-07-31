import { useState } from 'react'
import './MissionFilter.css'

function MissionFilter() {

    function showAll() {

    }

    function showPlanned() {

    }

    function showActive() {

    }

    function showCompleted() {

    }

    return (
        <div className='filter-container'>
            <button className='filter-button'>All</button>
            <button className='filter-button'>Planned</button>
            <button className='filter-button'>Active</button>
            <button className='filter-button'>Completed</button>
        </div>
    )
}

export default MissionFilter