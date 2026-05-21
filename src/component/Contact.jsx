import React from 'react'
import { Reveal } from '../Reveal'

export function Contact() {
  const details = [
    {
      media: 'Email',
      link: 'https://mail.google.com/mail/?view=cm&to=devanraj167@gmail.com',
      id: 'devanraj167@gmail.com',
      icon: <i className="fa-solid fa-at"></i>,
      color: '#3b83f63f'
    },
    {
      media: 'Linked In',
      link: 'https://www.linkedin.com/in/devarajan-m-85095937b/',
      id: 'Devarajan M',
      icon: <i className="fa-brands fa-linkedin-in"></i>,
      color: '#f63be03f'
    },
    {
      media: 'GitHub',
      link: 'https://github.com/devanraj1905?tab=repositories',
      id: 'Devarajan M',
      icon: <i className="fa-brands fa-github"></i>,
      color: '#f6ab3b3f'
    },
    {
      media: 'Resume',
      link: 'https://drive.google.com/file/d/1tJZJpgvZ66Xjwx2nCsUE7TXTocY2GJ2a/view?usp=drive_link',
      id: 'Devarajan_Resume',
      icon: <i className="fa-solid fa-arrow-down"></i>,
      color: '#3bf64e3f'
    }
  ]
  return (
    <div className=' position-relative' id='contact'>
      
      <div>
        <h1 className='text-center my-3 cont-title'>Contact</h1>


      </div>
      <div className='' style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '4rem',
        
      }} >

        <h4 className='py-3 '>Get In Touch</h4>
        <Reveal delay={1}>
       <div className='d-flex flex-wrap justify-content-center'
          style={{

          }}>

          {
            details.map((cont,i) => (
              <div key={i} className='' style={{
                border: '1px solid #000000',
                padding: '10px',
                width: '200px',
                position:'relative',
                margin: '10px',
                display: 'flex',

                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: cont.color

              }}>
                <span className='pb-2 text-danger'
                style={{
                  fontWeight:'900'
                }}>
                  {cont.icon}
                </span>
                <p style={{
                  color: '#000000',
                  fontWeight: '700'
                }}>{cont.media}</p>
                <a href={cont.link} target='_blank'  rel='noreferrer' className='stretched-link'
                style={{
                  textDecoration:'none',
                  color:'#64748b'
                }}>{cont.id}</a>

              </div>
            ))
          }
        </div>
        </Reveal>
      </div>
    
<footer style={{
      background: '#020617',
      borderTop: '1px solid #1e293b',
      padding: '20px 0',
      textAlign: 'center',
      position:'absolute',
      bottom:'0',
      width:'100%'
    }}>
      <p style={{ color: '#ffffff', fontSize: '12px', margin: 0 }}>
        © 2026 Devarajan M · Built with React
      </p>
    </footer>
    </div>
  )
}

