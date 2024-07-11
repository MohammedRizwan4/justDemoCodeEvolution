import { useState } from 'react'
import './App.css'
import './components/style.css'
import ClickCounter from './component/ClickCounter'
import HoverCounter from './component/HoverCounter'

function App() {

  return (
    <>
      <ClickCounter name='Rizwan'/>
      <HoverCounter name='Raiyan'/>
    </>
  )
}

export default App
