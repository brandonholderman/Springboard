import { useState } from 'react'
import Player from './Player'
import Enemy from './Enemy'
import Fire from './Fire'
import Status from './Status'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Player />
      <Enemy />
      <Fire />
      <Status />
    </>
  )
}

export default App
