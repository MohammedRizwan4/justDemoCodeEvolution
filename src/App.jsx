import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/Greet.jsx'
import Props from './components/Props.jsx'
import ClassBased from './components/ClassBased.jsx'

function App() {

  return (
    <>
      <ClassBased name="rizwan" address="ahmedabad"/>
      <ClassBased name="raiyan" address="mumbai"/>
      <ClassBased name="usman" address="vadodara"/>
    </>
  )
}

export default App
