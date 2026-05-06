import { useState } from 'react'


import './App.css'
import { About, Contact, Education, Hero, Navbar, Project, Skill } from './component'

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
        <Contact/>
      </main>
    </>
  )
}

export default App
