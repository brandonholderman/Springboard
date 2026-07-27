import { useState } from 'react'
import Status from './Status'
import Player from './Player'
import Enemy from './Enemy'
import './Fire.css'

function Fire() {
    const [playerHealth, setPlayerHealth] = useState(100)
    const [enemyHealth, setEnemyHealth] = useState(100)
    const [battleStatus, setBattleStatus] = useState('Engage the Enemy!')
    
    function attack() {
        if (playerHealth > 0 && enemyHealth > 0) {
            let playerRandom = Math.floor(Math.random() * 99)
            let enemyRandom = Math.floor(Math.random() * 99)

            let playerResult = Math.max(0, playerHealth - playerRandom)
            let enemyResult = Math.max(0, enemyHealth - enemyRandom)

            setPlayerHealth(playerResult)
            setEnemyHealth(enemyResult)
            
            if (playerResult === 0) {
                setBattleStatus('Congrats! You defeated your enemy!')
            }
        
            if (enemyResult === 0) {
                setBattleStatus('Bummer... you suck.')
            }
        }
    }
    
    return (
        <div>
            <Player health={playerHealth}/>
            <button className='fire-button' onClick={attack}>Fire!</button>
            <Enemy health={enemyHealth}/>
            <Status status={battleStatus}/>
        </div>
    )
}

export default Fire
