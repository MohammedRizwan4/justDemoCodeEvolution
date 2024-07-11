import { useState } from 'react'
import './App.css'
import UseEffectHook from './components/UseEffectHook'
import ClassUseEffect from './components/ClassUseEffect'

function App() {
  const [display, setDisplay] = useState(true)
  return (
    <>
      <button onClick={() => setDisplay(!display)}>Click</button>
      {display && <UseEffectHook />}
      {display && <ClassUseEffect />}
    </>
  )
}

export default App
