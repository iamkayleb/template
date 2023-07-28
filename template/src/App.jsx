import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Top from './components/Top'
import Middle from './components/Middle'
import Bottom from './components/Bottom'

function App() {

  return (
    <>
     <Top/>
     <Middle/>
     <br/>
     <Bottom/>
    </>
  )
}

export default App
