import { useState } from 'react'
import './App.css'
import ComponentA from './components/ComponentA'
import { UserProvider } from './components/userContext'

function App() {

  const info = {
    name: "Rizwan",
    age: 21
  }

  return (
    <>
      {/* <UserProvider value={info}> */}
        <ComponentA />
      {/* </UserProvider> */}
    </>
  )
}

export default App
