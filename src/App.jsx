import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/Greet.jsx'
import Props from './components/Props.jsx'

function App() {

  return (
    <>
      <h1>Hello world</h1>
      <Props name="rizwan" address="ahmedabad"/>
      <Props name="raiyan" address="mumbai"/>
      <Props name="usman" address="vadodara"/>

      <Props name="rizwan" address="ahmedabad">
        <p>Hello i am children</p>
      </Props>
      <Props name="raiyan" address="mumbai">
        <button>Action</button>
      </Props>
    </>
  )
}

export default App
