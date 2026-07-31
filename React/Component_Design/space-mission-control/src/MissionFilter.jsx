import { useState } from 'react'
import './MissionFilter.css'

function MissionFilter({ status }) {

    /** 
     * When a filter button is clicked, only missions that have a the matching status active, will be displayed. 
     * To achieve this, I need to pass 
    */


     

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