import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Allcomponent from './components/Allcomponent'
import Discover from './components/Discover'
import Eachdiscover from './components/Eachdiscover'
import { Route, Routes } from 'react-router'
import Recomandation from './components/Recomandation'

function App() {

  return (
    <>
      <Allcomponent/>

     
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/Eachdiscover/:id" element={<Eachdiscover />} />
      </Routes>
    
      {/* <Recomandation/> */}
    </>
  )
}

export default App
