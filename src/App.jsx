import React, { useReducer, useState } from 'react'
import './App.css'
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

export const CountContext = React.createContext();

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return 0;
    default:
      return state;
  }
}


function App() {

  const [count, dispatch] = useReducer(reducer, initialState)
  // we can pass reducer functionality using context API
  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </CountContext.Provider>
  )
}

export default App