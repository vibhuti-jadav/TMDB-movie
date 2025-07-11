import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Allcomponent from './components/Allcomponent'
import Discover from './components/Discover'
import { Route, Routes } from 'react-router'
import Recomandation from './components/Recomandation'
import EachDiscover from './components/Eachdiscover'

function App() {

  return (
    <>
      <Allcomponent/>

     
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/discover/:type/:id" element={<EachDiscover />} />

      </Routes>
    
      {/* <Recomandation/> */}

    </>
  )
}

export default App
