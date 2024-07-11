import { useState } from 'react'
import './App.css'
import './components/style.css'
import Counter from './component/Counter'
import ClickCounterTwo from './component/ClickCounterTwo'
import HoverCounterTwo from './component/HoverCounterTwo'

function App() {

  return (
    <>
      <Counter>
        {(count, incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount} />)}
      </Counter>
      <Counter>
        {(count, incrementCount) => (<HoverCounterTwo count={count} incrementCount={incrementCount} />)}
      </Counter>
    </>
  )
}

export default App
