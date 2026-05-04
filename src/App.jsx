import { useState } from 'react'


import './App.css'
import { About, Ed, Education, Hero, Navbar, Project, Skill } from './component'

function App() {


  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skill />
        <Project/>
        <Education/>
        <Ed/>
      </main>
    </>
  )
}

export default App
