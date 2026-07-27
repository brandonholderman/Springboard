import { useState } from 'react'
import Player from './Player'
import Fire from './Fire'
import Enemy from './Enemy'
import Status from './Status'
import './App.css'

function App() {

  return (
    <>
      <Player />
      <Fire />
      <Enemy />
      <Status />
    </>
  )
}

export default App
