import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Top from "./components/Top"
import Bottom from "./components/Bottom"
import Middle from "./components/Middle"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Top/>
      <Middle/>
      <Bottom/>
    
    </>
  )
}

export default App
