import React from 'react'

import movie from '/src/assets/movievault.png'
import gym from '/src/assets/rcfitness.png'
import mart from '/src/assets/freshmart.png'
import foodie from '/src/assets/foodie.png'
import { FaFileVideo, FaGithub } from 'react-icons/fa'
import { SiKdenlive } from 'react-icons/si'
import { motion } from 'framer-motion'
import { Reveal } from '../Reveal'
export function Project() {

  const project = [
      { name:'Foodie', icon:'🍜' ,image:foodie,live:'https://foodie-tau-ten.vercel.app/', github:'https://github.com/devanraj1905/Foodie', description:'Foodie is a responsive food recipe web application built using React and Tailwind CSS. The application uses TheMealDB API to display veg and non-veg meal categories, search recipes, view meal details, ingredients, and cooking instructions through dynamic routing and API integration.'},
      { name: 'Movie vault',icon:'🎬', image: movie,live:'https://movie-vault-blond.vercel.app',github:'https://github.com/devanraj1905/Movie_Vault', description: 'React application that fetches real-time movie data using TMDB API with search and category filtering.' },
      { name: 'Fresh Mart', icon:'🌿', image: mart, live:'https://fresh-mart-rfx2.onrender.com',github:'https://github.com/devanraj1905/Fresh-Mart', description: 'Fresh Mart is an online grocery store web application that allows users to browse, search, and purchase fresh products easily with a simple and user-friendly interface.' },
      { name: 'Rc Fitness', icon:'🏋🏻', image: gym,  live:'https://rc-fitness-pi.vercel.app',github:'https://github.com/devanraj1905/Rc-fitness', description: 'RC Fitness Gym is a modern fitness website designed to promote a healthy lifestyle. It showcases gym services, workout programs, trainers, and membership plans with an attractive and responsive user interface.' },
    ]
  return (
    <div id="projects">

      <Reveal><div className="d-flex flex-column  justify-content-center  align-items-center  ">

        <h1 className=" mb-5 pr-title">Projects</h1>
        <p className='text-secondary mb-5'>Projects showcasing my frontend development skills and real-world API integrations.</p>

       <Reveal y={100} delay={0.5} > <div className="d-flex gap-5 flex-wrap justify-content-center ">

          {project.map((pct) => (

            <div className=" " key={pct.name}>

              <div className="project-card">

                <div className="img-card">
                  <img src={pct.image} className="img-fluid" />
                </div>

                <div className="p-3">

                 
                 <p className="fw-bold">{pct.icon}{pct.name}</p>

                  <p className='text-overflow'>{pct.description}</p>

                  <div className="d-flex gap-3">

                    <a href={pct.live} target="_blank" className='text-decoration-none text-dark'><i className='text-danger'>●</i> Live</a>

                    <a href={pct.github} target="_blank" className='text-decoration-none text-dark'><FaGithub/>GitHub</a>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div></Reveal>

      </div>
      </Reveal>

    </div>
  )
}

