import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export function Hero() {
  return (
    <main className='vh-100  hero-bg'>
        <div className='d-flex align-items-center justify-content-center flex-column h-100 container'>
          <strong className='lead'>Hi, I'M</strong>
          <div className='d-flex '>  <h1 className='me-2'>Devarajan</h1><h1 className='text-primary'>M</h1></div>
            <h3 className='text-primary'><TypeAnimation  sequence={[
             "Front-end Developer...",
              2000,
              "Software Developer...",
              2000,
              "React Developer...",
              2000,
              "API-Based Application Builder...",
              2000, 
            ]} 
            speed={50}
            repeat={Infinity}
            /> </h3>
            <p className='w-75 py-4 lead'>I design and build responsive web applications using modern technologies like React, JavaScript, and APIs.  

I am continuously improving my full-stack skills to develop scalable and production-ready software solutions.</p>
        </div>
    </main>
  )
}

