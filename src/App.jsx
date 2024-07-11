import { useState } from 'react'
import './App.css'
import './components/style.css'
import Hero from './component/Hero'
import ErrorBoundary from './component/ErrorBoundary'

function App() {

  return (
    <>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
      <Hero heroName="Poker" />
      <Hero heroName="Soker" />
    </>
  )
}

export default App
