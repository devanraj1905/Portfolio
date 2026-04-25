import React from 'react'
import image from "../assets/photo.jpeg"

export function About() {
  return (
    <div  >
      <section className=' my-5' id='about'  >
        <h2 className='text-center'>About Me</h2>
        <div className='d-flex flex-column-reverse  flex-sm-row gap-2 align-items-center justify-content-center  p-0 p-lg-5 '>
          <div className=' p-0 ab-content p-lg-5 '>
            <p className=''>I am an entry-level Frontend Developer with hands-on experience building responsive web interfaces using HTML, CSS, JavaScript, and React. I focus on developing clean user interfaces, integrating APIs, and creating interactive web applications that solve real-world problems. Through academic and self-driven projects, I have worked on dynamic UI components, API-based features, and modern frontend workflows, and I am currently expanding my skills toward full-stack development.  </p>
            <p className=''>I primarily work with React and JavaScript to develop API-integrated applications and dynamic UI features that solve real-world problems. My projects include building multi-page interfaces, responsive dashboards, and interactive web components while following organized coding practices and version control using Git and GitHub.</p>
            <p className=''>Through academic and self-driven projects, I have gained practical experience working with real-world development challenges such as debugging layout issues, handling asynchronous data, and improving application performance. I am currently expanding my skills toward backend technologies and seeking an entry-level Frontend Developer role where I can contribute effectively and continue growing in a professional software development environment.</p>
          </div>
          
            
            <div className='main-image'>
              <img src={image} className='profile' />
              <div className='img-title'>
                <div className='img-overlay'>
                <h5>Devarajan M</h5>
                <p>Software Developer</p>
              </div>
              </div>
            
          </div>
          
        </div>
      </section>
    </div>
  )
}

