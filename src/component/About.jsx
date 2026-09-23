import React from 'react'
import image from "../assets/photo.jpeg"
import { Reveal } from '../Reveal'

export function About() {
  return (
    <div>
    <Reveal opacity={0.5}> <section className='about ' id='about'  >
       <h2 className='text-center py-3'>About Me</h2>
        <div className=' align-items-center justify-content-center row mx-0 overflow-hidden '>
          <div className=' col-10 col-lg-8 ab-content order-2 order-lg-1  '>

   <p className=''>I am a Software Developer with hands-on experience building and deploying full-stack web applications using JavaScript, React.js, Node.js, Express.js, REST APIs, and MongoDB. I focus on building responsive, user-friendly interfaces and developing reliable backend services that solve real-world problems.</p>

<p className=''>My projects include API-integrated applications, authentication and authorization systems, role-based access control, dynamic dashboards, and responsive web interfaces. I use Git and GitHub for version control and have experience deploying applications using platforms such as Vercel.</p>

<p className=''>I enjoy understanding problems, debugging issues, and building practical solutions rather than just writing code. I am currently looking for an entry-level Software Developer or Full-Stack Developer opportunity where I can contribute to real-world projects, strengthen my engineering skills, and grow as a professional developer.</p>

          </div>
       <div className='main-image col-8 col-lg-3 order-1 order-lg-2 my-2'>
            <Reveal  duration={1  } delay={0.3} y={100}  ><img src={image} className='profile' /></Reveal>
            <div className='img-title'>
              <div className='img-overlay'>
                <h5>Devarajan M</h5>
                <p>Frontend Developer</p>
              </div>
            </div>

          </div>

        </div>
      </section>
      </Reveal> 
    </div>
  )
}

