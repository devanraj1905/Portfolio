import { useState } from 'react'

import './App.css'
import { About, Hero, Navbar, Skill } from './component'

function App() {


  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skill />
      </main>
    </>
  )
}

export default App
