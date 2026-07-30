import { useState } from 'react'
import Status from './Status'
import Player from './Player'
import Enemy from './Enemy'
import './Fire.css'

function Fire() {
    const [playerHealth, setPlayerHealth] = useState(100);
    const [enemyHealth, setEnemyHealth] = useState(100);
    const [battleStatus, setBattleStatus] = useState('Engage the Enemy!');
    const [buttonType, setButtonType] = useState(0);
    
    function attack() {
        if (playerHealth > 0 && enemyHealth > 0) {
            let playerRandom = Math.floor(Math.random() * 70)
            let enemyRandom = Math.floor(Math.random() * 70)

            let playerResult = Math.max(0, playerHealth - playerRandom)
            let enemyResult = Math.max(0, enemyHealth - enemyRandom)

            setPlayerHealth(playerResult)
            setEnemyHealth(enemyResult)

            getStatus(playerResult, enemyResult)
        }
    };

    function getStatus(playerResult, enemyResult) {
        if (playerResult === 0 && enemyResult === 0) {
            setButtonType(1)
            setBattleStatus('You\'re both losers')
        } else if (playerResult === 0) {
            setButtonType(1)
            setBattleStatus('Bummer... you lose.')
        } else if (enemyResult === 0) {
            setButtonType(1)
            setBattleStatus('Congrats! You defeated your enemy!')
        }
    };

    function handleClick() {
        if (buttonType === 1) {
            let removeButton = document.querySelector('.fire-button')
            removeButton.remove()
        } else {
            attack()
        }
    };

    function handleReset(){
        setButtonType(0)
        setPlayerHealth(100)
        setEnemyHealth(100)
        setBattleStatus('Engage the Enemy!')
    };
    
    return (
        <>
            <h1 className='title-header'>Space Battle Simulator</h1>
            <div className='main-container'>
                <Player health={playerHealth}/>
                {buttonType !== 1 
                    ? <button className='fire-button' onClick={() => handleClick()}>Fire!</button> 
                    : <button className='reset-button' onClick={handleReset}>Reset Game</button>}
                <Enemy health={enemyHealth}/>
            </div>
            <Status status={battleStatus}/>
        </>
    )
}

export default Fire
