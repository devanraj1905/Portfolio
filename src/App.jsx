import { useState } from 'react'


import './App.css'
import { About, Hero, Navbar, Project, Skill } from './component'

function App() {


  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skill />
        <Project/>
      </main>
    </>
  )
}

export default App
