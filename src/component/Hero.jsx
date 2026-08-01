import "/src/App.css";
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Reveal } from '../Reveal'

export function Hero() {
  return (
    <main className='vh-100 hero-bg'>
        <div className='d-flex align-items-center justify-content-center flex-column h-100 container'>
         <Reveal delay={1}>  <strong className='lead'>Hi, I'M</strong></Reveal>
          <Reveal duration={1} delay={1.5} opacity={0} ><div className='d-flex '> <h1 className='me-2'>Devarajan</h1><h1 className='text-primary'>M</h1></div></Reveal> 
          <Reveal delay={2}>  <h3 className='text-primary'><TypeAnimation  sequence={[
            "MERN Stack Developer...",
            2000,
             "Frontend Developer...",
              2000,
              "React Developer...",
              2000,
           
            ]} 
            speed={50}
            repeat={Infinity}
            /> </h3></Reveal>
            <Reveal delay={2}><p className=' py-4 lead'>I design and build responsive web applications using modern technologies like React, JavaScript, and APIs.  

I am continuously improving my full-stack skills to develop scalable and production-ready software solutions.</p></Reveal>
        </div>
    </main>
  )
}

