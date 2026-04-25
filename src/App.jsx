import { useState } from 'react'

import './App.css'
import { About, Hero, Navbar, Skills } from './component'

function App() {


  return (
    <>
    <Navbar/>
    <main>
      <Hero/>
    <About/>  
    <Skills/> 
    </main>
    </>
  )
}

export default App
