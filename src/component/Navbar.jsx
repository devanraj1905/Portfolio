import React from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../Reveal'
export function Navbar() {
  return (
    
   
        <nav className='navbar navbar-expand-lg navbar-dark  modern-nav fixed-top p-3 d-flex justify-content-around'>
        <div className='container'>
       <Reveal x={-100} delay={0.5}> <h1 className='text-light' >Devarajan M</h1></Reveal>
        
        <button className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navmenu'>
            <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse'  id='navmenu' >
            <ul className='navbar-nav ms-auto gap-3'>
                <li className='nav-item'>
                    <a href='#about' className='nav-link'>About</a>
                </li>
                <li className='nav-item'>
                    <a  href='#skills' className='nav-link'>Skills</a>
                </li>
                <li className='nav-item'>
                    <a href="#projects" className='nav-link'>Projects</a>
                </li>
                <li className='nav-item'>
                    <a href='#education'  className='nav-link'>Education</a>
                </li>
                <li className='nav-item'>
                    <a href='#contact' className='nav-link'>Contact</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    
  )
}

