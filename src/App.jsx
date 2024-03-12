// useEffect() -- React hook that tells React DO SOME CODE WHEN (pick one) :
// This component re-renders
// This component mounts
// The state of a value

// 1. useEffect(() => {})                      // Runs after every re-render
// 2. useEffect(() => {}, [])                  // Runs only on mount
// 3. useEffect(() => {}, [value])             // Runs on mount + when value changes

import { useState, useEffect } from 'react'
import MyComponent from './MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent />
    </>
  )
}

export default App
