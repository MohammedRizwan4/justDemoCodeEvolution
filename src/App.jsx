import React, { useState } from 'react'
import './App.css'
import ComponentD from './components/ComponentD'

// here we have to create individual context for every value to access
export const UserContext = React.createContext()
export const AdminContext = React.createContext()

function App() {


  return (
    <>
      <UserContext.Provider value="Rizwan">
        <AdminContext.Provider value="Admin">
          <ComponentD />
        </AdminContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App