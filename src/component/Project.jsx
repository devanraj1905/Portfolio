import React from 'react'

import movie from '/src/assets/movievault.png'
import cricket from '/src/assets/cricket.png'
import mart from '/src/assets/freshmart.png'
import foodie from '/src/assets/foodie.png'
import { FaFileVideo, FaGithub } from 'react-icons/fa'
import { SiKdenlive } from 'react-icons/si'
import { motion } from 'framer-motion'
import { Reveal } from '../Reveal'
export function Project() {

  const project = [
    { name: 'Cricket Tournament Manager', icon: '🏏', image: cricket, Live: 'https://cricket-tournament-management.vercel.app/', github: 'https://github.com/devanraj1905/Cricket-Tournament-Management', description: 'Cricket Tournament Manager is a full MERN stack application with role-based authentication (player, admin, scorer) for managing tournaments, teams, and matches. It includes an admin dashboard for scheduling matches and recording results, along with a public player directory showing career stats and live points tables.'},
    { name: 'Foodie', icon: '🍜', image: foodie, live: 'https://foodie-tau-ten.vercel.app/', github: 'https://github.com/devanraj1905/Foodie', description: 'Foodie is a responsive food recipe web application built using React and Tailwind CSS. The application uses TheMealDB API to display veg and non-veg meal categories, search recipes, view meal details, ingredients, and cooking instructions through dynamic routing and API integration.' },
    { name: 'Movie vault', icon: '🎬', image: movie, live: 'https://movie-vault-blond.vercel.app', github: 'https://github.com/devanraj1905/Movie_Vault', description: 'React application that fetches real-time movie data using TMDB API with search and category filtering.' },
    { name: 'Fresh Mart', icon: '🌿', image: mart, live: 'https://fresh-mart-rfx2.onrender.com', github: 'https://github.com/devanraj1905/Fresh-Mart', description: 'Fresh Mart is an online grocery store web application that allows users to browse, search, and purchase fresh products easily with a simple and user-friendly interface.' },
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


                  <p className="fw-bold text-overflow1">{pct.icon}{pct.name}</p>

                  <p className='text-overflow'>{pct.description}</p>

                  <div className="d-flex gap-3">

                    <a href={pct.live} target="_blank" className='text-decoration-none text-dark'><i className='text-danger'>●</i> Live</a>

                    <a href={pct.github} target="_blank" className='text-decoration-none text-dark'><FaGithub />GitHub</a>

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

